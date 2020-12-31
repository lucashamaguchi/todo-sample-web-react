import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from '../views/App';
import Todos from '../views/Todos';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}>
        <Redirect to="/app" />
      </Route>
      <Route path="/app" component={App} />
      <Route path="/todos" component={Todos} />
      <Redirect to="/app" />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
