import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Switch>
        <Route path="/" eaxt>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
