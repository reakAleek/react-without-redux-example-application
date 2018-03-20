import React from 'react';
import PropTypes from 'prop-types';
import Dish from './Dish.jsx';

class DishList extends React.Component {
    render = () => (
        <ul>
            {
                this.props.dishes.map((dish) => (
                    <li key={dish.id}>
                        <Dish dish={dish}
                            onRemove={ this.props.removeDishFunc(dish.id) }
                            onUpdate={ this.props.updateDishFunc(dish.id) } />
                    </li>
                ))
            }
        </ul>
    )
}

DishList.propTypes = {
    dishes: PropTypes.array,
    removeDishFunc: PropTypes.func,
    updateDishFunc: PropTypes.func
}

export default DishList;