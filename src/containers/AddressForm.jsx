import { connect } from 'react-redux';
import { clearAddress, queryAddress } from '../actions';

import Address from '../components/Address';

const mapStateToProps = ({ addresses: { first, second } }) => ({
  queries: [first.query, second.query],
  suggestions: [first.suggestions, second.suggestions],
});

const mapDispatchToProps = dispatch => ({
  clearAddress: (first, second) => dispatch(clearAddress(first, second)),
  queryAddress: (first, second) => dispatch(queryAddress(first, second)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
