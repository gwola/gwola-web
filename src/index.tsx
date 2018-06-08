import './css/index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { createBrowserHistory } from 'history';
import * as RoutesModule from './router';
import registerServiceWorker from './registerServiceWorker';
import { ApplicationState } from './store';
import configureStore from './configureStore';
import { Router } from 'react-router';

import history from './history';


//const history = createBrowserHistory();
let routes = RoutesModule.routes;

const initialState = (window as any).initialReduxState as ApplicationState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
