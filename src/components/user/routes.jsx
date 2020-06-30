import { Route, Switch } from 'react-router-dom';
import React from 'react';


const routes = () => (
  <Switch>
      <Route exact path="/" render={() => <div>user root</div>} />
      <Route exact path="/userhome" render={() => <h1>user home</h1>} />
  </Switch>
);

export default routes;
