import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/account/Account";
import LoginSignup from "./pages/LoginSignup";
import ChildLogin from "./pages/ChildLogin";
import MyChildren from "./pages/account/MyChildren";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginSignup isPageLogin/>
        </Route>
        <Route path="/signup">
          <LoginSignup />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/myChildren">
          <MyChildren/>
        </Route>
        <Route path="/child/login">
          <ChildLogin />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
