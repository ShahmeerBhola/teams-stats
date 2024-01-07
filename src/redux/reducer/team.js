const initialState = {
  teamInfo: {
    name: "",
    format: "",
    // Add other state properties as needed
  },
};

const teamReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TEAM_INFO":
      return {
        ...state,
        teamInfo: action.payload,
      };
    case "SET_PLAYER_STATS":
      return {
        ...state,
        teamStats: { ...state.teamStats, ...action.payload },
      };
    default:
      return state;
  }
};

export default teamReducer;
