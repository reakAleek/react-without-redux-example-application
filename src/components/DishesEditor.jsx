import React from 'react';
import Dish from './Dish.jsx';
import PropTypes from 'prop-types';
const _ = require('lodash');

//import LimitedSizeStack from '../commons/LimitedSizeStack';

//const undoStack = new LimitedSizeStack(50);

class DishesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            past: [],
            present: {
                byId: {
                    0: {
                        id: 0,
                        name: 'Wiener Schnitzel',
                        price: '8.50',
                        addInfo: 'Mit Pommes oder Kartoffelsalat.'
                    }
                },
                allIds: [0],
            },
            future: [],
            nextId: 1
        }
    }

    addDish = () => {
        this.setState({
            past: [this.state.present, ...this.state.past],
            present: {
                byId: {
                    ...this.state.present.byId,
                    [this.state.nextId]: {
                        id: this.state.nextId, name: '', price: '', addInfo: ''
                    }
                },
                allIds: [...this.state.present.allIds, this.state.nextId],
            },
            future: [],
            nextId: this.state.nextId + 1
        }, this.updateParentState);
    }

    deleteDish = (id) => () => {
        this.setState({
            past: [this.state.present, ...this.state.past],
            present: {
                byId: _.omit(this.state.present.byId, id),
                allIds: _.without(this.state.present.allIds, id)
            },
            future: []
        }, this.updateParentState);
    }

    updateDish = (id) => (newDish) => {
        this.setState({
            past: [this.state.present, ...this.state.past],
            present: {
                ...this.state.present,
                byId: {
                    ...this.state.present.byId,
                    [id]: Object.assign({}, this.state.present.byId[id], newDish)
                }   
            },
            future: []
        }, this.updateParentState);
    }

    componentDidMount() {
        this.updateParentState();
    }

    updateParentState() {
        this.props.onUpdate(this.state.present.allIds.map(id => this.state.present.byId[id]))
    }

    onUndo = () => {
        if (this.state.past.length <= 0) {
            return;
        }
        this.setState({
            past: this.state.past.slice(1, this.state.past.length),
            present: this.state.past[0] || this.state.present,
            future: [this.state.present, ...this.state.future]
        }, this.updateParentState);
    }

    onRedo = () => {
        if (this.state.future.length <= 0) {
            return;
        }
        this.setState({
            past: [this.state.present, ...this.state.past],
            present: this.state.future[0] || this.state.present,
            future: this.state.future.slice(1, this.state.future.length)
        }, this.updateParentState);
    }

    renderUndoRedoButton = (condition, onClick, text, icon) =>  (
        <button
            disabled={!condition}
            className='button' 
            onClick={onClick}>
            <span className={ 'icon' }>
            { icon } 
            </span>
            <span>{ text }</span>
        </button>
    );

    render = () => (    
        <div>
            <div className="buttons">
                { this.renderUndoRedoButton(this.state.past.length, this.onUndo, 'Undo', <i className="fa fa-undo" aria-hidden="true"/>)}
                { this.renderUndoRedoButton(this.state.future.length, this.onRedo, 'Redo', <i className="fa fa-repeat" aria-hidden="true"/>)}
            </div>
            <ul>
                {
                    this.state.present.allIds.map(id => this.state.present.byId[id]).map((dish) => (
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