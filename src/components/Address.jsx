import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ name, title }) => (
  <div>
    <h1>{title}</h1>
    <div>{name || 'Select An Address'}</div>
  </div>
);

Address.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Address;
