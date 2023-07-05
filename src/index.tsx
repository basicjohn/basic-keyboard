// dependencies
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

// styles
import "./cssReset.scss";
import "./index.scss";

// components
import App from "./App";


const container = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  container
);
