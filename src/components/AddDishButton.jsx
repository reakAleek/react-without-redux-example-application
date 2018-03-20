import React from 'react';
import PropTypes from 'prop-types';


class AddDishButton extends React.Component {
    
    render = () => (
        <button style={{ width: '100%' }}
                    className='button is-success' 
                    onMouseDown={ () => this.props.addDishFunc() }>
                    <span className="icon"></span>
                    Add Dish
        </button>
    );
}

AddDishButton.propTypes = {
    addDishFunc: PropTypes.func,
}

export default AddDishButton;