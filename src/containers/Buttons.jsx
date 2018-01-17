import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

const buttonStyle = { marginRight: '5px' }


let Buttons = ({ dispatch }) => (
    <div>
        <button style={buttonStyle} className='button is-outlined is-dark is-small' onClick={ () => dispatch(increment()) }>+</button>
        <button className='button is-outlined is-dark is-small' onClick={ () => dispatch(decrement()) }>-</button>
    </div>
);

Buttons.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(Buttons);