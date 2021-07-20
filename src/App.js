import { useReactiveVar } from "@apollo/client";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          {!isLoggedIn ? (
            <Route path="/sign-up">
              <SignUp />
            </Route>
          ) : null}
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
