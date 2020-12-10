import { createAction } from "redux-actions";

const TAG = "tag";
const VALUE = "value";

export const ChangeTag = createAction(TAG);
export const ChangeValue = createAction(VALUE);

const initialState = {
  state: {
    tag: [],
    value: null
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TAG:
      return {
        state: Object.assign(state.state, { tag: action.payload })
      };
    case VALUE:
      return { state: Object.assign(state.state, { value: action.payload }) };
    default:
      return state;
  }
}
