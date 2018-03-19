import React from 'react';
import Dish from './Dish.jsx';
import PropTypes from 'prop-types';
const _ = require('lodash');

//[{ id: 0, name: 'Wiener Schnitzel', price: 8.50, addInfo: 'Mit Pommes oder Kartoffelsalat.'}]
class DishesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            byId: {
                0: {
                    id: 0,
                    name: 'Wiener Schnitzel',
                    price: 8.50,
                    addInfo: 'Mit Pommes oder Kartoffelsalat.'
                }
            },
            allIds: [0],
            nextId: 1
        }
    }

    addDish = () => {
        this.setState({ 
            byId: {
                ...this.state.byId,
                [this.state.nextId]: {
                    id: this.state.nextId, name: '', price: '', addInfo: ''
                }
            },
            allIds: [...this.state.allIds, this.state.nextId],
            nextId: this.state.nextId + 1
        }, this.updateParentState);
    }

    deleteDish = (id) => () => {
        this.setState({ 
            byId: _.omit(this.state.byId, id),
            allIds: this.state.allIds.filter(_id => _id !== id)
        }, this.updateParentState);
    }

    updateDish = (id) => (newDish) => { 
        this.setState({
            ...this.state,
            byId: {
                ...this.state.byId,
                [id]: Object.assign({}, this.state.byId[id], newDish)
            }   
        }, this.updateParentState);
    }

    updateParentState() {
        this.props.onUpdate(this.state.allIds.map(id => this.state.byId[id]))
    }

    render = () => (    
        <div>
            <ul>
                {
                    this.state.allIds.map(id => this.state.byId[id]).map((dish) => (
                        <li key={dish.id}>
                            <Dish dish={dish}
                                onRemove={ this.deleteDish(dish.id) }
                                onUpdate={ this.updateDish(dish.id) } />
                        </li>
                    ))
                }
            </ul>
            <button style={{ width: '100%' }}
                    className='button is-success' 
                    onMouseDown={ () => this.addDish() }>
                    <span className="icon"></span>
                    Add Dish
            </button>
        </div>
    );
}

DishesEditor.propTypes = {
    dishes: PropTypes.array,
    onUpdate: PropTypes.func
}

export default DishesEditor;