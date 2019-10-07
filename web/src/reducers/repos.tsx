
import {
  DATA_LOADED,
  SET_LANGUAGES,
  DETAILS_LOADED,
  SHOW_COMMITS,
  SHOW_COMMITS_VIEW,
  SHOW_REPOS_VIEW,
  SHOW_REPOS,
  SET_VISIBILITY_FILTER,
  APPLY_FILTER,
  FILTER_ALL
} from "../constants/action-types";

const initialState = {
  repos: [],
  languages: [],
  visibleRepos: [],
  view: SHOW_REPOS_VIEW,
  details: [],
  selectedFilter: FILTER_ALL,
  full_name: null
}

const repos = (state = initialState, action: any) => {
  switch (action.type) {
    case DATA_LOADED:
      return {
        ...state,
        repos: action.payload,
        visibleRepos: action.payload
      }
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      }
    case DETAILS_LOADED:
      return {
        ...state,
        details: action.payload
      }
    case SHOW_COMMITS:
      return {
        ...state,
          view: SHOW_COMMITS_VIEW,
          full_name: action.full_name
      }
    case SHOW_REPOS:
      return {
        ...state,
        view: SHOW_REPOS_VIEW
      }
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        selectedFilter: action.selectedFilter
      }
    case APPLY_FILTER:
      return {
        ...state,
        visibleRepos: action.repos
      }
    default:
      return state;
  }
}

export default repos
