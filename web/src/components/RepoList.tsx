import React from 'react'
import { connect } from 'react-redux';
import Repo from './Repo'
import Table from 'react-bootstrap/Table';

//Component TS Interface
import { IRepo } from '../types/index';

const mapStateToProps = (state) => {
  return { repos: state.repo.visibleRepos };
};

const RepoList = ({ repos }) => (
  <Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Language</th>
        <th>Forks Count</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {repos.map((repo: IRepo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          forks_count={repo.forks_count}
          full_name={repo.full_name}
        />
      ))}
    </tbody>
  </Table>
)

const List = connect(mapStateToProps) (RepoList);

export default List
