import { 
    ADD_DISH, 
    REMOVE_DISH, 
    UPDATE_DISH_NAME,
    UNDO_DISHES,
    REDO_DISHES,
    UPDATE_DISH_PRICE
} from '../actions/ActionTypes';
import LimitedSizeStack from '../commons/LimitedSizeStack';
const _ = require('lodash');
var dishId = 0;

const _initialState = {
    byId: {
        [dishId]: { id: dishId,
            name: '',

            price: '' }
    },
    allIds: [dishId++]
}

const undoStack = new LimitedSizeStack(10);
const redoStack = new LimitedSizeStack(10);
const pushToUndoStack = (state) => { 
    undoStack.push(state); redoStack.clear() 
}

export default (state = _initialState, action) => {
    switch (action.type) {
        case UNDO_DISHES:
            if (undoStack.length() > 0) {
                redoStack.push(state);
                return undoStack.pop();
            }
            return state;

        case REDO_DISHES:
            if (redoStack.length() > 0) {
                undoStack.push(state);
                return redoStack.pop();
            }
            return state;

        case ADD_DISH:
            pushToUndoStack(state);
            return  {
                byId: { 
                    ...state.byId,
                    [dishId]: { 
                        id: dishId,
                        name: '',
                        price: ''
                    }
                },
                allIds: [...state.allIds, dishId++]
            };

        case REMOVE_DISH:
            pushToUndoStack(state);
            return {
                byId: _.omit(state.byId, action.id),
                allIds: state.allIds.filter(id => id !== action.id)
            };

        case UPDATE_DISH_NAME:
            if (action.name !== state.byId[action.id].name) {
                pushToUndoStack(state);
                return updatedDish(state, action.id, { name: action.name });
            }
            return state;

        case UPDATE_DISH_PRICE:
            if (action.price !== state.byId[action.id].price) {
                pushToUndoStack(state);
                return updatedDish(state, action.id, { price: action.price })
            }
            return state;
        
        default:
        return state;
    }
}


const updatedDish = (state, id, obj) => {
    return {
        ...state,
        byId: {
            ...state.byId,
            [id]: Object.assign({}, state.byId[id], obj)
        }
    }
}