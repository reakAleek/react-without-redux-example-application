import React from 'react';
import PropTypes from 'prop-types';
class Preview extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            dishes: this.props.dishes || []
        }
    }

    componentWillReceiveProps = (ev) => { 
        this.setState({ dishes: ev.dishes })
    }

    dishItem = (dish, index) => {
        return (dish.name) ? 
            (
                <li className="dish-item" key={index}>
                    <div className="dish-item__label is-size-5">
                        <span>{ dish.name }</span>
                        <span>{ !dish.price || '€' } { dish.price.toLocaleString('de-DE') }</span>
                    </div>
                    <div className="dish-item__additional-info has-text-grey-light">
                        { dish.addInfo }
                    </div>
                </li>
            )
        : null;
    }

    render = () => (
        <div className="columns is-centered">
        <div className="column is-6">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Menu
                    </p>
                    <a href="#" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fa fa-angle-down" aria-hidden="true"/>
                        </span>
                    </a>
                </header>
                <div className="card-content" style={{minHeight: '5rem'}}>
                    <div>
                        { (this.state.dishes.length > 0 && this.state.dishes[0].name != '') ? '' : 'No content' }
                    </div>
                    <ul className="dish-list">
                        {
                            this.state.dishes.map(this.dishItem)
                        }
                    </ul>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                        <span className="icon">
                            <i className="fa fa-heart-o has-text-danger" aria-hidden="true"/>
                        </span>
                    </a>
                    <a href="#" className="card-footer-item">
                        <span className="icon">
                            <i className="fa fa-info-circle has-text-info" aria-hidden="true"/>
                        </span>
                    </a>
                </footer>
            </div>
        </div>
    </div>
    );
}

Preview.propTypes = {
    dishes: PropTypes.array
}

export default Preview;