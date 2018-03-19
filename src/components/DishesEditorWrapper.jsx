import React from 'react';
import DishesEditor from './DishesEditor.jsx';
import Preview from './Preview.jsx';

export default class DishesEditorWrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            dishes: [{ id: 0, name: 'Wiener Schnitzel', price: 8.50, addInfo: 'Mit Pommes oder Kartoffelsalat.'}]
        }
    }

    onUpdate = (ev) => {
        this.setState({dishes: ev}); 
    }

    render = () => (
        <div className="section">
            <div className="container is-fluild">
                <div className='columns'>
                    <div className='column is-4' style={{ backgroundColor: 'whitesmoke' }}>
                        <DishesEditor onUpdate={ this.onUpdate }/>
                    </div>
                    <div className='column is-8' style={{ backgroundColor: 'lightslategrey' }}>
                        <Preview dishes={ this.state.dishes } />
                    </div>
                </div>
            </div>
        </div>
    );
}