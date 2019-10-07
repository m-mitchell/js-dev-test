import {
  DATA_LOADED,
  SET_LANGUAGES,
  DETAILS_LOADED,
  SHOW_COMMITS,
  SHOW_REPOS,
  SET_VISIBILITY_FILTER,
  FILTER_ALL,
  APPLY_FILTER
} from "../constants/action-types";

//Action Interfaces
import {
  ShowCommits,
  ShowRepos
} from "../types/actions";

export const showCommits = (full_name: string): ShowCommits => ({
  type: SHOW_COMMITS,
  full_name: full_name
})

export const showRepos = (): ShowRepos => ({
  type: SHOW_REPOS,
  full_name: null,
  details: null
})

export const getRepos = () => {
  return function(dispatch: any) {
    fetch("http://localhost:4000/repos")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: DATA_LOADED, payload: json });
      //Set languages
      let languages = [...new Set(json.map(data => data.language))];
      languages.unshift("All");
      dispatch({ type: SET_LANGUAGES, languages: languages });
    });
  };
}

export const getDetails = () => {
  return function(dispatch: any, getState) {
    const state = getState();

    fetch(`https://api.github.com/repos/${state.repo.full_name}/commits`)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: DETAILS_LOADED, payload: json });
    });
  };
}

export const setVisibilityFilter = (filter: string) => {
  return function(dispatch: any, getState) {
    const state = getState();

    dispatch({ type: SET_VISIBILITY_FILTER, selectedFilter: filter });

    const visibileRepos = filter === FILTER_ALL ? state.repo.repos : state.repo.repos.filter(function(repo: any) {
      return repo.language === filter;
    });

    dispatch({ type: APPLY_FILTER, repos: visibileRepos});
  }
}
