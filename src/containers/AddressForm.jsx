import { connect } from 'react-redux';
import { search, fetchAddress, fetchResults, clearAddress } from '../actions';

import Address from '../components/Address';

const mapStateToProps = ({ search: { first, second }, addresses, results }) => ({
  inputs: [first.input, second.input],
  suggestions: [first.suggestions, second.suggestions],
  addresses,
  results,
});

const mapDispatchToProps = dispatch => ({
  search: (first, second) => dispatch(search(first, second)),
  selectAddress: (position, placeId) => dispatch(fetchAddress(
    position === 'first' ? placeId : null,
    position === 'second' ? placeId : null,
  )),
  fetchResults: () => dispatch(fetchResults()),
  clearAddresses: () => dispatch(clearAddress(true, true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
