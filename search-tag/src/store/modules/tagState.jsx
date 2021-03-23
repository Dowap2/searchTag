import { createAction } from "redux-actions";

const MODE = "mode";
const TAG = "tag";
const VALUE = "value";
const SEARCHED = "searched";

export const ChangeMode = createAction(MODE);
export const ChangeTag = createAction(TAG);
export const ChangeValue = createAction(VALUE);
export const ChangeSearched = createAction(SEARCHED);

const initialState = {
  state: {
    mode: "light",
    tag: [],
    value: null,
    searched: []
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MODE:
      return { state: Object.assign(state.state, { mode: action.payload }) };
    case TAG:
      return {
        state: Object.assign(state.state, { tag: action.payload })
      };
    case VALUE:
      return { state: Object.assign(state.state, { value: action.payload }) };
    case SEARCHED:
      return {
        state: Object.assign(state.state, { searched: action.payload })
      };
    default:
      return state;
  }
}
