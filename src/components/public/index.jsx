import 'regenerator-runtime/runtime';
import 'core-js/stable';
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';


window.React = React;
render(
  <>
    <Router basename="/">
        <Routes />
    </Router>
  </>,
  document.getElementById('react-container'),
);
