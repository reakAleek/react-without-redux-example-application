import React from 'react';
import PropTypes from 'prop-types';


const veggie = (
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
            <a className="button is-small is-static">
                <span className="icon">
                    <i className="fa fa-leaf has-text-success" aria-hidden="true"></i>
                </span>
            </a>
        </div>
    </div>
);


const hotness = (
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
            <a className="button is-small is-static">
                <span className="icon">
                    <i className="fa fa-fire has-text-danger" aria-hidden="true"></i>
                </span>
            </a>
        </div>
    </div>
);

const Dish = ({ dish, onRemove, onChangeName, onChangePrice }) => (
    <div className='box' style={{marginBottom: '1rem'}}>
            <div className="has-text-centered">
                <span className="icon" style={{cursor: 'move'}}>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
            </div>
            <div className="field is-grouped">
                <p className="control is-expanded">
                    <input className='input' 
                            value   ={dish.name}
                            onChange={ ev => onChangeName(dish.id, ev.target.value) }
                            placeholder='Name' />
                </p>
                <p className="control">
                    <button className="button is-danger"
                            onClick={ () => onRemove(dish.id) }>
                            <span className="icon">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                    </button>
                </p>
            </div>

            <div className="field">
                <p className="control">
                    <input className='input'
                            value={dish.price}
                            onChange={ ev => onChangePrice(dish.id, ev.target.value) }
                            placeholder='Price' />
                </p>
            </div>

            <div className="field">
                <div className="control">
                    <textarea style={{resize: 'none', height: '3rem', transition: 'height 125ms ease-in-out'}}
                        rows="1" 
                        className="textarea" 
                        placeholder="Additional infos..."
                        onFocus={ ev => ev.target.style.height = '10rem' }
                        onBlur={ ev => {ev.target.style.height = '3rem'; ev.target.scrollTop = 0; } }
                        ></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    { veggie }
                </div>
                <div className="control">
                    { hotness }
                </div>
            </div>
    </div>
);

const dishPropType = PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number
})

Dish.propTypes = { 
    dish: dishPropType.isRequired,
    onRemove: PropTypes.func,
    onChangeName: PropTypes.func,
    onChangePrice: PropTypes.func
};

export default Dish;
