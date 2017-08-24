import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import Results from './Results';
import Addresses from './Addresses';

const App = ({ inputs, suggestions, search, selectAddress, addresses, fetchResults, results, clearAddresses }) => (
  <div>
    <Addresses
      data={addresses}
      clearAddresses={clearAddresses}
      inputs={inputs}
      search={search}
    />
    <h1>suggestions 1</h1>
    <Dropdown position="first" suggestions={suggestions[0]} selectAddress={selectAddress} />
    <h1>suggestions 2</h1>
    <Dropdown position="second" suggestions={suggestions[1]} selectAddress={selectAddress} />
    <h1>Results</h1>
    <button onClick={fetchResults}>Search Realtors</button>
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
