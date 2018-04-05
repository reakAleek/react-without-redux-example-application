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
        this.setState((prevState) => ({
            past: [prevState.present, ...prevState.past],
            present: {
                byId: {
                    ...prevState.present.byId,
                    [prevState.nextId]: {
                        id: prevState.nextId,
                        name: '', 
                        price: '',
                        addInfo: '',
                        veggie: false,
                        hot: 0
                    }
                },
                allIds: [...prevState.present.allIds, prevState.nextId],
            },
            future: [],
            nextId: prevState.nextId + 1
        }), this.updateParentState);
    }

    deleteDish = (id) => () => {
        this.setState((prevState) => ({
            past: [prevState.present, ...prevState.past],
            present: {
                byId: _.omit(prevState.present.byId, id),
                allIds: _.without(prevState.present.allIds, id)
            },
            future: []
        }), this.updateParentState);
    }

    updateDish = (id) => (newDish) => {
        this.setState((prevState) => ({
            past: [prevState.present, ...prevState.past],
            present: {
                ...prevState.present,
                byId: {
                    ...prevState.present.byId,
                    [id]: Object.assign({}, prevState.present.byId[id], newDish)
                }   
            },
            future: []
        }), this.updateParentState);
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
        this.setState((prevState) =>({
            past: prevState.past.slice(1, prevState.past.length),
            present: prevState.past[0] || prevState.present,
            future: [prevState.present, ...prevState.future]
        }), this.updateParentState);
    }

    onRedo = () => {
        if (this.state.future.length <= 0) {
            return;
        }
        this.setState((prevState) => ({
            past: [prevState.present, ...prevState.past],
            present: prevState.future[0] || prevState.present,
            future: prevState.future.slice(1, prevState.future.length)
        }), this.updateParentState);
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
    onUpdate: PropTypes.func
}

export default DishesEditor;