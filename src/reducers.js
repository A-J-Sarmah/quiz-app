import { combineReducers } from "redux";

const setUp = (
  state = {
    NumberOfQuestion: "10",
    catagory: "",
    difficulty: "",
    type: "multiple",
  },
  action
) => {
  switch (action.type) {
    case "NUMBER_OF_QUESTION":
      return { ...state, NumberOfQuestion: action.value };
    case "CATAGORY":
      let value;
      if (action.value === "Science:Computers") {
        value = "18";
      } else if (action.value === "Politics") {
        value = "24";
      } else if (action.value === "Art") {
        value = "25";
      } else {
        value = "";
      }
      return { ...state, catagory: value };
    case "DIFFICULTY":
      return { ...state, difficulty: action.value };
    default:
      return { ...state };
  }
};

const URL = (
  state = { recived: false, data: [], turn: 0, correct: 0, incorrect: 0 },
  action
) => {
  switch (action.type) {
    case "RECIVED_DATA":
      return {
        ...state,
        recived: true,
        data: action.value,
      };
    default:
      return { ...state };
  }
};

export const QUIZ_APP = combineReducers({ setUp, URL });
