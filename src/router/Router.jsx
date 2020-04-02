// Third-party dependencies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Own constants/actions/components
import Home from 'containers/Home/Home';
import NotFound from 'containers/NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
