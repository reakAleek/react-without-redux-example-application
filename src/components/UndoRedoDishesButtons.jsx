import React from 'react';
import PropTypes from 'prop-types';


class UndoRedoDishesButtons extends React.Component {

    renderUndoRedoButton = (condition, onClick, text, icon) =>  (
        <button
            disabled={!condition}
            className='button' 
            onClick={onClick}>
            <span className={ 'icon' }>
            { icon } 
            </span>
            <span>{ text }</span>
        </button>
    );
    
    render = () => (
        <div className="buttons">
                { this.renderUndoRedoButton(this.props.undoActive, this.props.undoFunc, 'Undo', <i className="fa fa-undo" aria-hidden="true"/>)}
                { this.renderUndoRedoButton(this.props.redoActive, this.props.redoFunc, 'Redo', <i className="fa fa-repeat" aria-hidden="true"/>)}
        </div>
    );
}

UndoRedoDishesButtons.propTypes = {
    undoFunc: PropTypes.func,
    redoFunc: PropTypes.func,
    undoActive: PropTypes.bool,
    redoActive: PropTypes.bool
}

export default UndoRedoDishesButtons;