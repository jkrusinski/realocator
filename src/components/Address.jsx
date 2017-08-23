import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const Address = ({ inputs, suggestions, search }) => (
  <form>
    <input type="text" value={inputs[0]} onChange={e => search(e.target.value, null)} />
    <input type="text" value={inputs[1]} onChange={e => search(null, e.target.value)} />
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
  search: PropTypes.func.isRequired,
};

export default Address;
