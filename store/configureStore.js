import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import adminReducer from "../reducers/adminReducer";
import studentReducer from "../reducers/studentReducer";
import AdminCoursesReducer from "../reducers/AdminCoursesReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      admin: adminReducer,
      students: studentReducer,
      courses: AdminCoursesReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
