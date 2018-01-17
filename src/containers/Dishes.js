import { connect } from 'react-redux';
import Dishes from '../components/Dishes.jsx';

const mapStateToProps = (state) => ({ dishes: state.dishes.allIds.map(id => state.dishes.byId[id]) });

export default connect(mapStateToProps)(Dishes);