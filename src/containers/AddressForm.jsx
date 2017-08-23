import { connect } from 'react-redux';
import { search } from '../actions';

import Address from '../components/Address';

const mapStateToProps = ({ search: { first, second } }) => ({
  inputs: [first.input, second.input],
  suggestions: [first.suggestions, second.suggestions],
});

const mapDispatchToProps = dispatch => ({
  search: (first, second) => dispatch(search(first, second)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
