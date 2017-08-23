import { connect } from 'react-redux';
import { updateFirstAddress, updateSecondAddress } from '../actions';

import Address from '../components/Address';

const mapStateToProps = ({ addresses: { first, second } }) => ({
  firstAddress: first,
  secondAddress: second,
});

const mapDispatchToProps = dispatch => ({
  updateFirstAddress: e => dispatch(updateFirstAddress(e.target.value)),
  updateSecondAddress: e => dispatch(updateSecondAddress(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
