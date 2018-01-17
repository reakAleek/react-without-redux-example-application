import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Preview = ({ dishes }) => (
    <ul>
        { dishes.map( (dish, index) => (<li key={index}>{ dish.name } { (dish.price ? '-' : '') } { dish.price }</li>)) }
    </ul>
)

Preview.propTypes = {
    dishes: PropTypes.array
}

const mapStateToProps = (state) => ({ dishes: state.dishes.allIds.map(id => state.dishes.byId[id])  });
export default connect(mapStateToProps)(Preview);