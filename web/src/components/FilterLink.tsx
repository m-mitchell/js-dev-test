import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Button from 'react-bootstrap/Button';

const mapStateToProps = (state) => {
  return {
    availLanguages: state.repo.languages,
    selectedFilter: state.repo.selectedFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
  }
};

const links = ({availLanguages, setVisibilityFilter, selectedFilter}) => (
  <div>
  {availLanguages.map((language: string) => (
        <Button
          variant="light"
          className={ selectedFilter === language ? 'active' : '' }
          onClick={() => setVisibilityFilter(language)}
          >
          {language}
        </Button>
    ))}
  </div>
)

const filterLink = connect(mapStateToProps, mapDispatchToProps) (links);

export default filterLink;
