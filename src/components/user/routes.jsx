import { Route, Switch } from 'react-router-dom';
import React from 'react';


const routes = () => (
  <Switch>
      <Route exact path="/" component={() => <div>user root</div>} />
      <Route exact path="/userhome" component={() => <h1>user home</h1>} />
  </Switch>
);

export default routes;
