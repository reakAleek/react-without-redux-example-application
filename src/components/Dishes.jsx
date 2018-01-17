import React from 'react';
import PropTypes from 'prop-types';
import Dish from '../containers/Dish.jsx';

const Dishes = ({ dishes }) => (
    <ul>
        { 
            dishes.map( (dish, index) => (
                <li key={index}>
                    <Dish dish={dish} />
                </li>)
            )
        }
    </ul>
);

Dishes.propTypes = { 
    dishes: PropTypes.array.isRequired,
 };

export default Dishes;
