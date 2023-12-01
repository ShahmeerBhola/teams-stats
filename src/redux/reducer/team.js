const initialState = {
  teamInfo: {
    name: "",
    format: "",
    // Add other state properties as needed
  },
};

const teamReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_TEAM_INFO":
      return {
        ...state,
        teamInfo: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
