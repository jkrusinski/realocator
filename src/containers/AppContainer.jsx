import { connect } from 'react-redux';
import { search, fetchAddress, fetchResults, clearAddress, clearResults } from '../actions';

import App from '../components/App';

const mapStateToProps = ({ search: { first, second }, addresses, results }) => ({
  inputs: [first.input, second.input],
  suggestions: [first.suggestions, second.suggestions],
  addresses,
  results,
});

const mapDispatchToProps = dispatch => ({
  search: (first, second) => dispatch(search(first, second)),
  selectAddress: (first, second) => dispatch(fetchAddress(first, second)),
  fetchResults: () => dispatch(fetchResults()),
  clearAddresses: () => {
    dispatch(clearAddress(true, true));
    dispatch(clearResults());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
