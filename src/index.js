import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

import Chooser from "./Chooser";
import Example1 from "./Examples/Example1";
import Example2 from "./Examples/Example2";
import Example3 from "./Examples/Example3";
import Example4 from "./Examples/Example4";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Chooser} />
        <Route path="/" exact component={Example1} />
        <Route path="/example1" component={Example1} />
        <Route path="/example2" component={Example2} />
        <Route path="/example3" component={Example3} />
        <Route path="/example4" component={Example4} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
