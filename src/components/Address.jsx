import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const Address = ({ name, title, input, search, suggestions, selectAddress }) => (
  <div>
    <h1>{title}</h1>
    <div>{name || 'Search For An Address'}</div>
    <input
      type="text"
      value={input}
      onChange={e => search(e.target.value)}
    />
    <Dropdown suggestions={suggestions} selectAddress={selectAddress} />
  </div>
);

Address.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectAddress: PropTypes.func.isRequired,
};

export default Address;
