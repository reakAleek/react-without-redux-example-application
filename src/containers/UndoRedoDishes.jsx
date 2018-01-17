import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { undoDishes, redoDishes } from '../actions/dishes';

const buttonStyle = { marginRight: '5px' }

const mapStateToProps = (state) => ({ 
    count: state.length,
 });

const mapDispatchToProps = ({
    undo: undoDishes,
    redo: redoDishes
  })

const conditionalButton = (condition, onClick, text) =>  (<button style={buttonStyle}
    disabled={!condition}
    className='button' 
    onClick={onClick}>
    { text }
</button>);

let UndoRedoDishes = ({undo, redo }) => (
        <div>
            { conditionalButton((true), () => { undo() }, 'Undo') }
            { conditionalButton((true), () => { redo() }, 'Redo') }
        </div>    
);

UndoRedoDishes.propTypes = {
    undo: PropTypes.func,
    redo: PropTypes.func,
    count: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedoDishes);