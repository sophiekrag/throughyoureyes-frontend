import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  { ThemeProvider } from "styled-components";

import GlobalStyles, { theme } from "./utils/GlobalStyles";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import ChildPrivateRoute from "./utils/childProfile/ChildPrivateRoute";
import CreateConnect from "./pages/account/CreateConnect";
import LoginSignup from "./pages/LoginSignup";
import ChildLogin from "./pages/ChildLogin";
import AccountIndex from "./pages/account/AccountIndex";
import CreateStory from "./pages/account/story/CreateStory";
import MyStories from "./pages/account/story/MyStories";
import StoryDetail from "./pages/account/story/StoryDetail";
import StoryEdit from "./pages/account/story/StoryEdit";
import AuthContext from "./utils/AuthContext";
import AdminPage from "./pages/account/AdminPage";
import ChildProfile from "./pages/childProfile/ChildProfile";
import ChildStoryDetail from "./pages/childProfile/ChildStoryDetail";
import ChildAuthContext from "./utils/childProfile/ChildAuthContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContext>
      <ChildAuthContext>
        <GlobalStyles />
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
            <PrivateRoute path="/my-stories/details/:storyId">
              <StoryDetail />
            </PrivateRoute>
            <PrivateRoute path="/my-stories/edit/:storyId">
              <StoryEdit />
            </PrivateRoute>
            <PrivateRoute path="/child-profile/:childId">
              <AdminPage />
            </PrivateRoute>
            <Route path="/child/login">
              <ChildLogin />
            </Route>
            <ChildPrivateRoute exact path="/childProfile">
              <ChildProfile />
            </ChildPrivateRoute>
            <ChildPrivateRoute path="/childProfile/details/:storyId">
              <ChildStoryDetail/>
            </ChildPrivateRoute>
          </Switch>
        </Router>
        </ChildAuthContext>
      </AuthContext>
    </ThemeProvider>
  );
};

export default App;
