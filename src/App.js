import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { BrowserRouter, Route } from "react-router-dom";
import Game from "./Components/Game";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="container user-select-none">
          <Route path="/" component={Form} exact />
          <Route path="/game" component={Game} exact />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
