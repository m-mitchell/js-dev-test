import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import FilterLink from './FilterLink'
import Card from 'react-bootstrap/Card';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repo.repos,
    languages: state.repo.languages
   };
};


const list = ({repos, setVisibilityFilter}) => {

  return (<Card>
    <Card.Body>
      <b>Filter By Language:</b>
      <hr/>
      <ButtonToolbar>
          <FilterLink />
      </ButtonToolbar>
    </Card.Body>
  </Card>)
}

const ListFilter = connect(mapStateToProps, mapDispatchToProps) (list);

export default ListFilter
