import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import CreateConnect from "./pages/account/CreateConnect";
import LoginSignup from "./pages/LoginSignup";
import ChildLogin from "./pages/ChildLogin";
import AccountIndex from "./pages/account/AccountIndex";
import CreateStory from "./pages/account/story/CreateStory";
import MyStories from "./pages/account/story/MyStories";
import StoryDetail from "./pages/account/story/StoryDetail";

import StoryEdit from "./pages/account/story/StoryEdit";
import AuthContext from "./utils/AuthContext";

const App = () => {
  return (
    <AuthContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginSignup isPageLogin />
          </Route>
          <Route path="/signup">
            <LoginSignup />
          </Route>
          <PrivateRoute path="/account">
            <AccountIndex />
          </PrivateRoute>
          <PrivateRoute path="/create-connect">
            <CreateConnect />
          </PrivateRoute>
          <PrivateRoute path="/create-story/:childId">
            <CreateStory />
          </PrivateRoute>
          <PrivateRoute exact path="/my-stories">
            <MyStories />
          </PrivateRoute>
          <PrivateRoute exact path="/my-stories/details/:storyId">
            <StoryDetail />
          </PrivateRoute>
          <PrivateRoute exact path="/my-stories/edit/:storyId">
            <StoryDetail />
          </PrivateRoute>
          <Route path="/child/login">
            <ChildLogin />
          </Route>
        </Switch>
      </Router>
    </AuthContext>
  );
};

export default App;
