import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';

class Dish extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.dish.name,
            price: this.props.dish.price,
            addInfo: this.props.dish.addInfo,
        }
    }    

    onChangeName = (name) => {
        this.setState({ ...this.state, name}, this.updateParentState)
    }

    onChangePrice = (price) => {
        this.setState({ ...this.state, price }, this.updateParentState);
    }

    onChangeAddInfo = (text) => {
        this.setState({ ...this.state, addInfo: text }, this.updateParentState);
    }

    updateParentState() {
        this.props.onUpdate(this.state);
    }

    renderNameInput = () => (
        <div className="field is-grouped">
                <p className="control is-expanded">
                <input className='input'
                        value={this.state.name}
                        onChange={ ev => this.onChangeName(ev.target.value) }
                        placeholder='Name' />
                </p>
                <p className="control">
                    <button className="button is-danger"
                            onClick={ this.props.onRemove }>
                            <span className="icon">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                    </button>
                </p>
            </div>
    );

    renderPriceInput = () => (
        <div className="field has-addons">
                <p className="control is-expanded">
                    <input className='input'
                            type='number'
                            step='0.01'
                            min='0'
                            value={this.state.price}
                            onChange={ ev => this.onChangePrice(ev.target.value) }
                            placeholder='Price' />
                </p>
                <p className="control">
                    <a className="button is-static">
                    <span className="icon">
                        <i className="fa fa-eur" aria-hidden="true"/>
                    </span>
                    </a>
                </p>
            </div>
    );

    renderTextarea = () => (
        <div className="field">
                <div className="control">
                    <textarea style={{resize: 'none', height: '3rem', transition: 'height 125ms ease-in-out'}}
                        rows="1" 
                        className="textarea" 
                        placeholder="Additional infos..."
                        value={this.state.addInfo}
                        onChange={ ev => this.onChangeAddInfo(ev.target.value)}
                        onFocus={ ev => ev.target.style.height = '10rem' }
                        onBlur={ ev => {ev.target.style.height = '3rem'; ev.target.scrollTop = 0; } }
                        ></textarea>
                </div>
            </div>
    );

    renderVeggie = () => (
        <div className="field is-expanded has-addons">
            <div className="control">
                <span className="select is-small">
                    <select>
                        <option>No</option>
                        <option>Yes</option>
                    </select>
                </span>
            </div>
            <div className="control">
                <Tooltip title="Veggy"
                    position="top"
                    trigger="mouseenter"
                    delay="150"
                    style={{cursor: 'help'}}>
                    <a className="button is-small is-static">
                        <span className="icon">
                            <i className="fa fa-leaf has-text-success" aria-hidden="true"></i>
                        </span>
                    </a>
                </Tooltip>
            </div>
        </div>
    );

    renderHot = () => (
        <div className="field is-expanded has-addons">
            <div className="control">
                <span className="select is-small">
                    <select>
                        <option>No</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </span>
            </div>
            <div className="control">
                <Tooltip title="Hot"
                        position="top"
                        trigger="mouseenter"
                        delay="150"
                        style={{cursor: 'help'}}>
                    <a className="button is-small is-static">
                        <span className="icon">
                            <i className="fa fa-fire has-text-danger" aria-hidden="true"></i>
                        </span>
                    </a>
                </Tooltip>
            </div>
        </div>
    );

    render = () => (
        <div className='box' style={{marginBottom: '1rem'}}>      
            { this.renderNameInput() }
            { this.renderPriceInput() }
            { this.renderTextarea() }
            <div className="field is-grouped">
                <div className="control">
                    { this.renderVeggie() }
                </div>
                <div className="control">
                    { this.renderHot() }
                </div>
            </div>
        </div>
    );
    
}

Dish.propTypes = {
    dish: PropTypes.object,
    onRemove: PropTypes.func,
    onUpdate: PropTypes.func
}

export default Dish;