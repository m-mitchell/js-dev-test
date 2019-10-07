import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, showRepos } from '../actions/index';
import Commit from './Commit';
import '../App.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { SHOW_REPOS_VIEW } from '../constants/action-types.jsx';

//Component TS Interfaces
import { StoreState, DetailsProps, DetailsState } from '../types/index';

const mapStateToProps = (state) => {
  return {
    full_name: state.repo.full_name,
    commits: state.repo.details
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: () => dispatch(getDetails()),
    showRepos: () => dispatch(showRepos())
  }
};

class Details extends Component<DetailsProps, DetailsState> {

  componentDidMount() {
    this.props.getDetails();
  }

  render() {
    const commits = this.props.commits;
    return (
      <React.Fragment>
      <Button variant="light" size="sm" onClick={() => this.props.showRepos()}>Back</Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Date</th>
            <th>Author</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            commits.map((commitDetails) => (
            <Commit
              commitDate={commitDetails.commit.author.date}
              commitAuthor={commitDetails.commit.author.name}
              commitMessage={commitDetails.commit.message} />
            ))
          }
        </tbody>
      </Table>
      </React.Fragment>
    )
  }

}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Details);
