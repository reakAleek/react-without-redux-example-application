import { 
    ADD_MENU, 
    FETCH_MENUS_SUCCESS
} from '../actions/ActionTypes';



var menuId = 0;

const initalState = [];

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_MENU:
            return [...state, { id: menuId++} ];
        
        case FETCH_MENUS_SUCCESS:
            return action.menus.map( menu => ({ id: menuId++, date: menu.to_date }))
        default:
            return state;
    }
}


