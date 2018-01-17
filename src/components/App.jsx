import React from 'react';
// import Count from '../containers/Count';
// import Buttons from '../containers/Buttons';
import Dishes from '../containers/Dishes';
import AddDish from '../containers/AddDish.jsx';
import Count from '../containers/Count';
import Buttons from '../containers/Buttons.jsx';
import UndoRedo from '../containers/UndoRedoDishes.jsx';
import Preview from '../containers/Preview.jsx';


const App = () => (
    <div className='section'>
        <div className='container'>
            <div className='columns is-centered'>
                <div className='column is-4'>
                    <Dishes />
                    <AddDish />
                </div>
                <div className='column is-4'>
                    <UndoRedo />
                    <Count />
                    <Buttons />
                    <Preview />
                </div>
            </div>
        </div>
    </div>
);

export default App;
