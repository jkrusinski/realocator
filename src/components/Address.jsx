import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const Address = ({ inputs, suggestions, queryAddress }) => (
  <form>
    <input type="text" value={inputs[0]} onChange={e => queryAddress(e.target.value, null)} />
    <input type="text" value={inputs[1]} onChange={e => queryAddress(null, e.target.value)} />
    <input type="submit" />
    <hr />
    <h1>suggestions 1</h1>
    <Dropdown suggestions={suggestions[0]} />
    <hr />
    <h1>suggestions 2</h1>
    <Dropdown suggestions={suggestions[1]} />
  </form>
);

Address.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.array).isRequired,
  queryAddress: PropTypes.func.isRequired,
};

export default Address;
