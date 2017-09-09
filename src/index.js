import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import FirstSelect from './FirstSelect';
import ThenReceive from './ThenReceive';

const reducerFunction = (state = {}, action) => {
  switch (action.type) {
    // For the sake of example, the reducer function is over-simplified, as well as
    // there are no action creator functions declared in src/actions. There's simply
    // no src/actions/ at all.
    // Instead, we're going to use "dispatch" prop injected into a component
    // by "connect" function (from react-redux). You need to always remember:
    // when you connect(fn)(Component), the Component has "dispatch" prop!
    case 'GOT_TODOS': return Object.assign({}, state, { todos: action.payload });
    default: return state;
  }
};

const App = () => (
  <Provider store={createStore(reducerFunction)}>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={FirstSelect} />
        <Route exact path="/2" component={ThenReceive} />
        <Route path="*" component={() => <div>404</div>} />
      </Switch>
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
