
import {
    ADD_DISH,
    REMOVE_DISH,
    UPDATE_DISH_NAME,
    UNDO_DISHES,
    REDO_DISHES,
    UPDATE_DISH_PRICE
} from './ActionTypes';

export const removeDish = (id) => ({ 
    type: REMOVE_DISH,
    id: id
});


export const addDish = (dish) => ({
    type: ADD_DISH,
    dish: dish
});

export const updateDishName = (id, name) => ({
    type: UPDATE_DISH_NAME,
    id: id,
    name: name
});

export const updateDishPrice = (id, price) => ({
    type: UPDATE_DISH_PRICE,
    id: id,
    price: price
});

export const undoDishes = () => ({ type: UNDO_DISHES });

export const redoDishes = () => ({ type: REDO_DISHES })
