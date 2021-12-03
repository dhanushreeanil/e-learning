const studentsInitialState = [];

const studentReducer = (state = studentsInitialState, action) => {
  switch (action.type) {
    case "SET_STUDENTS": {
      return [...action.payload];
    }
    case "EDIT_STUDENT": {
      return state.map((student) => {
        if (student._id === action.payload._id) {
          return { ...student, ...action.payload };
        } else {
          return { ...student };
        }
      });
    }
    case "REMOVE_STUDENT": {
      return state.filter((student) => {
        return student._id !== action.payload;
      });
    }
    default: {
      return [...state];
    }
  }
};

export default studentReducer;
