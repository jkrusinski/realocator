import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const Address = ({ inputs, suggestions, search, selectAddress, addresses }) => (
  <div>
    <h1>Address 1</h1>
    { addresses.first ? addresses.first.name : null }
    <h1>Address 2</h1>
    { addresses.second ? addresses.second.name : null }
    <form>
      <input type="text" value={inputs[0]} onChange={e => search(e.target.value, null)} />
      <input type="text" value={inputs[1]} onChange={e => search(null, e.target.value)} />
      <h1>suggestions 1</h1>
      <Dropdown position="first" suggestions={suggestions[0]} selectAddress={selectAddress} />
      <h1>suggestions 2</h1>
      <Dropdown position="second" suggestions={suggestions[1]} selectAddress={selectAddress} />
    </form>
  </div>
);

Address.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.array).isRequired,
  search: PropTypes.func.isRequired,
  selectAddress: PropTypes.func.isRequired,
  addresses: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }).isRequired,
};

export default Address;
