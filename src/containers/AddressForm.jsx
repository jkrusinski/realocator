import { connect } from 'react-redux';
import { search, fetchAddress } from '../actions';

import Address from '../components/Address';

const mapStateToProps = ({ search: { first, second }, addresses }) => ({
  inputs: [first.input, second.input],
  suggestions: [first.suggestions, second.suggestions],
  addresses,
});

const mapDispatchToProps = dispatch => ({
  search: (first, second) => dispatch(search(first, second)),
  selectAddress: (position, placeId) => dispatch(fetchAddress(
    position === 'first' ? placeId : null,
    position === 'second' ? placeId : null,
  )),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
