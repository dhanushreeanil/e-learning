const coursesInitialState = [];

const AdminCoursesReducer = (state = coursesInitialState, action) => {
  switch (action.type) {
    case "SET_COURSES": {
      return [...action.payload];
    }
    // case "SET_COURSE": {
    //   return [...state, { ...action.payload }];
    // }
    case "REMOVE_COURSE": {
      return state.filter((course) => {
        return course._id !== action.payload;
      });
    }
    default: {
      return [...state];
    }
  }
};

export default AdminCoursesReducer;
