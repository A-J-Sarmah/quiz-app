import React from "react";

function Form() {
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
          value="10"
        />
        <label className="my-3">Select Catagory:</label>
        <select name="select catagory" vlaue="any" className="form-select">
          <option value="any">Any</option>
          <option value="Science:Computers">Science:Computers</option>
          <option value="Politics">Politics</option>
          <option value="Art">Art</option>
        </select>
        <label className="my-3">Select Catagory:</label>
        <select name="select difficulty" vlaue="any" className="form-select">
          <option value="any">Any</option>
          <option value="easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <div className="button text-center">
          <button className="btn btn-warning px-5 my-5">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
