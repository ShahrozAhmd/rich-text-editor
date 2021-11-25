import { state } from "Context/State/state";

const { editor } = state;

const Reducer = (state = editor, action) => {
  switch (
    action.type
    // case:

    //     break;

    // default:
    //     break;
  ) {
  }
};
const combineReducers =
  (...reducers) =>
  (state = initialState, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

const [state, dispatch] = useReducer(
  combineReducers(reducer1, reducer2),
  initialState
);
export default Reducer;
