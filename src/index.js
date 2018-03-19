require('../index.html');
require('bulma/bulma.sass');
require('bulma/css/bulma.css');
import 'react-tippy/dist/tippy.css';
require('../assets/stylesheets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);