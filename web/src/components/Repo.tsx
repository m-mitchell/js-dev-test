import React from 'react';
import { connect } from 'react-redux';
import { showCommits } from '../actions/index';
import Button from 'react-bootstrap/Button';

import { SHOW_COMMITS_VIEW } from '../constants/action-types.jsx';

const mapStateToProps = (props:any) => {
  return {
    name: props.name,
    description: props.description,
    language: props.language,
    forks_count: props.forks_count,
    full_name: props.full_name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCommits: (full_name) => dispatch(showCommits(full_name))
  }
};

const Item = ({name, description, language, forks_count, full_name, showCommits}) => (
  <tr>
    <td>{name}</td>
    <td>{description}</td>
    <td>{language}</td>
    <td>{forks_count}</td>
    <td><Button variant="light" size="sm" onClick={() => showCommits(full_name)}>Commits</Button></td>
  </tr>
)

const Repo = connect(null, mapDispatchToProps) (Item);

export default Repo
