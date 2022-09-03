import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/home';

const Switchs = () => (
  <Switch>
    <Route path="/" component={ Home } />
  </Switch>
);

export default Switchs;