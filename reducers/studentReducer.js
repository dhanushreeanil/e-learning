const studentInitialState = [];

const studentReducer = (state = studentInitialState, action) => {
  switch (action.type) {
    case "SET_STUDENT": {
      return [...state, { ...action.payload }];
    }
    default: {
      return [...state];
    }
  }
};

export default studentReducer;
