import { combineReducers } from "redux";
import { changeTheNumber } from "./counter";
import { randomSignIn } from "./randomSignIn";

const reducers = combineReducers({
  changeTheNumber,
  randomSignIn,
});

export default reducers;
