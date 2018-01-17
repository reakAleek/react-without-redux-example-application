import { connect } from 'react-redux';
import Dish from '../components/Dish.jsx';
import { removeDish, updateDishName, updateDishPrice } from '../actions/dishes';

const mapDispatchToProps = (dispatch) => ({
    onRemove: (id) => {
      dispatch(removeDish(id))
    },
    onChangeName: (id, name) => {
        dispatch(updateDishName(id, name))
    },
    onChangePrice: (id, price) => {
        dispatch(updateDishPrice(id, price))
    }
});

export default connect(null, mapDispatchToProps)(Dish);