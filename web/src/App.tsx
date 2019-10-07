import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepos } from './actions/index';
import ListFilter from './components/ListFilter';
import RepoList from './components/RepoList';
import Details from './components/Details';
import './App.css'

//constants
import { SHOW_COMMITS_VIEW } from './constants/action-types';

//Component TYPESCRIPT
import { AppProps, AppState } from './types/index';

const mapStateToProps = (state) => {
  return {
    view: state.repo.view
   };
};

class App extends Component<AppProps, AppState> {

  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <p>
            Hippo Developer Test App | By: Michael Cox
          </p>
        </header>
        { this.props.view === SHOW_COMMITS_VIEW
          ? <React.Fragment><Details /></React.Fragment>
          : <React.Fragment><ListFilter /><RepoList /></React.Fragment>
        }
      </div>

    )
  }

}

export default connect(
  mapStateToProps, { getRepos }
)(App);
