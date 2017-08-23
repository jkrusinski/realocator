import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ queries, suggestions, clearAddress, queryAddress }) => (
  <form>
    <input type="text" value={queries[0]} onChange={e => queryAddress(e.target.value, null)} />
    <input type="text" value={queries[1]} onChange={e => queryAddress(null, e.target.value)} />
    <input type="submit" />
    <hr />
    <h1>suggestions 1</h1>
    <pre>{JSON.stringify(suggestions[0])}</pre>
    <hr />
    <h1>suggestions 2</h1>
    <pre>{JSON.stringify(suggestions[1])}</pre>
  </form>
);

Address.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.array).isRequired,
  clearAddress: PropTypes.func.isRequired,
  queryAddress: PropTypes.func.isRequired,
};

export default Address;
