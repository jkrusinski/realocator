import React from 'react';
import PropTypes from 'prop-types';

import Results from './Results';
import Addresses from './Addresses';

const App = ({ inputs, suggestions, search, selectAddress, addresses, fetchResults, results, clearAddresses }) => (
  <div>
    <Addresses
      addresses={addresses}
      clearAddresses={clearAddresses}
      inputs={inputs}
      search={search}
      fetchResults={fetchResults}
      suggestions={suggestions}
      selectAddress={selectAddress}
    />

    <Results data={results} />
  </div>
);

App.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.array).isRequired,
  search: PropTypes.func.isRequired,
  selectAddress: PropTypes.func.isRequired,
  addresses: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }).isRequired,
};

export default App;
