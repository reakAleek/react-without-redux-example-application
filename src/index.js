require('../index.html');
require('bulma/bulma.sass');
require('bulma/css/bulma.css');
import 'react-tippy/dist/tippy.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import App from './components/App.jsx';
import { fetchMenus } from './actions/index';

const store = createStore(
    reducer,
    applyMiddleware(
        thunk, 
        logger
    )
);

// initial dispatch
store.dispatch(fetchMenus());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('app')
);