import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TokenPage from "./components/TokenPage";
import RoadMapPage from "./components/RoadMapPage";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import Community from "./components/Community";
import TeamPageNewSection from "./components/TeamPageNewSection";
import BlogCardPage from "./components/BlogCardPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Banner />
        <HomePage />
      </Route>
      <Route exact path="/blogs">
        <BlogCardPage />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/token">
        <TokenPage />
      </Route>
      <Route exact path="/team">
        <TeamPageNewSection />
      </Route>
      <Route exact path="/roadmap">
        <RoadMapPage />
      </Route>
      <Route exact path="/community">
        <Community />
      </Route>
      <Route exact path="/signUp">
        <SignUpPage />
      </Route>
      <Route exact path="/signIn">
        <SignInPage />
      </Route>
      <Route path="/">
        <Banner />
        <HomePage />
      </Route>
    </Switch>
  );
}

export default Routes;