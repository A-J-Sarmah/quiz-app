import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

let Form = ({ dispatch }) => {
  const changeAmount = (value) => {
    if (parseInt(value) < 50) {
      dispatch({ type: "NUMBER_OF_QUESTION", value });
    } else {
      dispatch({ type: "NUMBER_OF_QUESTION", value: "10" });
    }
  };
  const changeCatagory = (value) => {
    dispatch({ type: "CATAGORY", value });
  };
  const changeDifficulty = (value) => {
    dispatch({ type: "DIFFICULTY", value });
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className="form col-lg-6 col-12">
        <p className="display-5 my-5">Setup Quiz</p>
        <label>Number of Questions:</label>
        <input
          type="number"
          name="trivia_amount"
          className="form-control"
          min="1"
          max="50"
          placeholder="10"
          onChange={(event) => {
            changeAmount(event.target.value);
          }}
        />
        <label className="my-3">Select Catagory:</label>
        <select
          name="select catagory"
          vlaue="any"
          className="form-select"
          onChange={(event) => {
            changeCatagory(event.target.value);
          }}
        >
          <option value="any">Any</option>
          <option value="Science:Computers">Science:Computers</option>
          <option value="Politics">Politics</option>
          <option value="Art">Art</option>
        </select>
        <label className="my-3">Select Difficulty:</label>
        <select
          name="select difficulty"
          vlaue="any"
          className="form-select"
          onChange={(event) => changeDifficulty(event.target.value)}
        >
          <option value="any">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div className="button text-center">
          <Link className="btn btn-warning px-5 my-5" to="/Game">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

Form = connect()(Form);

export default Form;
