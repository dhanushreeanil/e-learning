const adminInitialState = {};

const adminReducer = (state = adminInitialState, action) => {
  switch (action.type) {
    case "SET_ADMIN": {
      return { ...action.payload };
    }
    case "EDIT_ADMIN": {
      return { ...state, ...action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default adminReducer;
