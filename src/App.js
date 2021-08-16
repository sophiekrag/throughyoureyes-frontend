import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateConnect from "./pages/account/CreateConnect";
import LoginSignup from "./pages/LoginSignup";
import ChildLogin from "./pages/ChildLogin";
import AccountIndex from "./pages/account/AccountIndex";
import CreateStory from "./pages/account/CreateStory";

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
          <AccountIndex/>
        </Route>
        <Route path="/create-connect">
          <CreateConnect />
        </Route>
        <Route path="/create-story">
          <CreateStory />
        </Route>
        <Route path="/child/login">
          <ChildLogin />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
