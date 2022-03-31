const IncrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

const DecrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

const randomUser = () => {
  return {
    type: "RANDOMLY_SIGN_IN",
  };
};

export { IncrementAction, DecrementAction, randomUser };
