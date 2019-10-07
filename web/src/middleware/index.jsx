import { SET_VISIBILITY_FILTER, APPLY_FILTER } from "../constants/action-types";

function filterRepos({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === SET_VISIBILITY_FILTER) {
        return dispatch({ type: APPLY_FILTER, selectedFilter: action.selectedFilter });
      }
      return next(action);
    }
  }
}
