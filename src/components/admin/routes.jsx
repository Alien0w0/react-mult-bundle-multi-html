import { Route, Switch } from 'react-router-dom';
import React from 'react';


const routes = () => (
  <Switch>
    <Route exact path="/" component={<h1>admin root</h1>} />
    <Route exact path="/adminhome" component={<h1>adminhome</h1>} />
  </Switch>
);

export default routes;
