import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';


const routes = () => (
  <Switch>
    <Route exact path="/adminhome" render={() => <h1>adminhome</h1>} />
    <Route exact path="/" render={() => <h1>admin root</h1>} />

  </Switch>
);

export default routes;
