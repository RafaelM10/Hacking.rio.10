import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/home';
import PagePix from '../pages/doacoes/doacoes';

const Switchs = () => (
  <Switch>
    <Route path="/doacoes" component={ PagePix } />
    <Route path="/" component={ Home } />
  </Switch>
);

export default Switchs;