import React from 'react';
import PropTypes from 'prop-types';

import Results from './Results';
import Addresses from './Addresses';
import Actions from './Actions';

const App = props => (
  <div>
    <Addresses {...props} />
    <Actions fetchResults={props.fetchResults} clearAddresses={props.clearAddresses} />
    <Results data={props.results} />
  </div>
);

App.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchResults: PropTypes.func.isRequired,
  clearAddresses: PropTypes.func.isRequired,
};

export default App;
