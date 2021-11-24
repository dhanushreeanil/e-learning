import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import adminReducer from "../reducers/adminReducer";
import studentReducer from "../reducers/studentReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      admin: adminReducer,
      students: studentReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
