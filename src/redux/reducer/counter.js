let initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        state: state.state + 1,
      };

    case "DECREMENT":
      return {
        state: state.state - 1,
      };

    default:
      return {
        state,
      };
  }
};

export { changeTheNumber };
