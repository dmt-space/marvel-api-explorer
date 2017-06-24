import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomeContainer from './container/homeContainer';
import DetailContainer from './container/detailContainer';
import RootReducer from './reducers/root';
import defaultStore from './model/initialState';
import Styles from '../scss/app.scss';
import Api from './model/api';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const router = routerMiddleware(history);

const api = new Api(process.env.API_KEY);
const store = createStore(RootReducer, defaultStore, applyMiddleware(router, thunk.withExtraArgument(api)));

render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/detail/:id" component={DetailContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('marvel-app')
);
