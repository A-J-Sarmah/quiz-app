import React, { useEffect } from "react";
import { connect } from "react-redux";

let Game = ({ state, dispatch }) => {
  const Quiz = () => {
    const data = state.URL.data[state.URL.turn];
    let answers = [];
    answers.push(data.correct_answer);
    for (let i = 0; i < data.incorrect_answers.length; i++) {
      answers.push(data.incorrect_answers[i]);
    }
    for (let i = answers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
    console.log(answers);
    return answers;
  };
  let data;
  if (state.URL.recived) {
    data = Quiz();
  }
  useEffect(() => {
    const URL = `https://opentdb.com/api.php?amount=${
      state.setUp.NumberOfQuestion
    }${state.setUp.catagory !== "" ? `&category=${state.setUp.catagory}` : ""}${
      state.setUp.difficulty !== ""
        ? `&difficulty=${state.setUp.difficulty}`
        : ""
    }&type=multiple&encode=url3986`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "RECIVED_DATA", value: data.results });
      });
  }, []);
  if (
    state.URL.recived === true &&
    state.URL.turn < parseInt(state.setUp.NumberOfQuestion) - 1
  ) {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12 mt-5">
          <p className="display-5 text-center mb-5">
            {decodeURIComponent(state.URL.data[state.URL.turn].question)}
          </p>
          {data.map((element) => {
            return (
              <>
                <div className="options mt-2 bg-info rounded" key={element}>
                  <p className="text-center display-5 fs-4 px-2">
                    {decodeURIComponent(element)}
                  </p>
                </div>
              </>
            );
          })}
          <div className="buttons text-center mt-5 mb-2">
            <button className="btn btn-warning px-5">Skip</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { state };
};

Game = connect(mapStateToProps)(Game);
export default Game;
