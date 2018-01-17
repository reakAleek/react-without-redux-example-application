import dishes from './dishes';
import count from './count';
import menus from './menus';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    menus,
    dishes,
    count
})

export default rootReducer;