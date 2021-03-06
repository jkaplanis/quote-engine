import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
  // Redirect
} from "react-router-dom";
import Pdf from "./pages/PrintReadyPdf";
import Template from "./pages/Template";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Template />
        </Route>
        <Route exact path="/print">
          <Pdf />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
