import React from "react";

function Game() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-6 col-12 mt-5">
        <p className="display-3 text-center">The Question</p>
        <div className="options mt-5 bg-info rounded">
          <p className="text-center display-5 fs-4 px-2">AJ</p>
        </div>
        <div className="options mt-2 bg-info rounded">
          <p className="text-center display-5 fs-4 px-2">JS</p>
        </div>
        <div className="options mt-2 bg-info rounded">
          <p className="text-center display-5 fs-4 px-2">DJ</p>
        </div>
        <div className="buttons text-center mt-5">
          <button className="btn btn-warning px-5">Skip</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
