import React from 'react';
import PropTypes from 'prop-types';
const _ = require('lodash');
import DishList from './DishList.jsx';
import UndoRedoDishesButtons from './UndoRedoDishesButtons.jsx';
import AddDishButton from './AddDishButton.jsx';

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
                        addInfo: 'Mit Pommes oder Kartoffelsalat.',
                        veggie: false,
                        hot: 0
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
                        id: this.state.nextId,
                        name: '', 
                        price: '',
                        addInfo: '',
                        veggie: false,
                        hot: 0
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

    getDishList = () => {
        return this.state.present.allIds.map(id => this.state.present.byId[id])
    }

    render = () => (    
        <div>

            <UndoRedoDishesButtons 
                undoActive={this.state.past.length > 0}
                undoFunc={this.onUndo}
                redoActive={this.state.future.length > 0}
                redoFunc={this.onRedo} />

            <DishList dishes={ this.getDishList() }
                removeDishFunc={this.deleteDish}
                updateDishFunc={this.updateDish} />

            <AddDishButton addDishFunc={this.addDish}/>
        </div>
    );
}

DishesEditor.propTypes = {
    dishes: PropTypes.array,
    onUpdate: PropTypes.func
}

export default DishesEditor;