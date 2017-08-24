import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ name, title, input, search }) => (
  <div>
    <h1>{title}</h1>
    <div>{name || 'Select An Address'}</div>
    <input type="text" value={input} onChange={e => search(e.target.value)} />
  </div>
);

Address.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default Address;
