import * as actions from "../actions/actions";

const DEFAULT_STATE = {
  summaryData: null,
};

export default function reducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case actions.UPDATE_SUMMARY:
      return {
        ...state,
        summaryData: action.payload,
      };

    default:
      return state;
  }
}
