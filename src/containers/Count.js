import { connect } from 'react-redux';
import Count from '../components/Count.jsx';

const mapStateToProps = (state) => ({ count: state.count });
export default connect(mapStateToProps)(Count);