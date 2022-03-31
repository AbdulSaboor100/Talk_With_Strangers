import { signInAnonymously, auth } from "../../firebase/firebaseConfig";

let initialState = null;

const randomSignIn = async (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        state: state.state + 1,
      };

    case "DECREMENT":
      return {
        state: state.state - 1,
      };

    case "RANDOMLY_SIGN_IN":
      const api = await signInAnonymously(auth);
      return api.user;

    default:
      return {
        state,
      };
  }
};

export { randomSignIn };
