import { createStore } from "redux";
import ReducerRoot from "./Redux/Reducer/ReducerRoot";

const store = createStore(
  ReducerRoot,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
