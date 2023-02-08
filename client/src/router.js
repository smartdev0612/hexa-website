import React from 'react';
import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route exact path="/home" />
    <Route exact path="/blogs" />
    <Route exact path="/blog" />
    <Route exact path="/token" />
    <Route exact path="/team" />
    <Route exact path="/roadmap" />
    <Route exact path="/community" />
    <Route exact path="/signUp" />
    <Route exact path="/signIn" />
    <Route path="/" />
  </Switch>
)