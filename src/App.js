import React from 'react';
import { Route } from 'react-router-dom';
import './assets/scss/index.scss';

import Home from './pages/Home';
import ManagerHome from './pages/ManagerHome';
import Account from './pages/Account';

export default function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/manage" component={ManagerHome} />
      <Route path="/account/:type" component={Account} />
    </>
  );
}