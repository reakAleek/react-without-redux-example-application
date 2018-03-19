import React from 'react';
import DishesEditorWrapper from './DishesEditorWrapper.jsx';
const App = () => (
    <div>
        <div style={{padding: '1rem 0 0 0'}}>
            <nav className="level">
                <p className="level-item has-text-centered">
                    <a className="button is-small" target="_blank" rel="noopener noreferrer" href="https://github.com/reakAleek/react-without-redux-example-application">
                        <span className="icon">
                        <i className="fa fa-github"></i>
                        </span>
                        <span>GitHub</span>
                    </a>
                </p> 
            </nav>
        </div>
        <DishesEditorWrapper />
    </div>
    
);

export default App;