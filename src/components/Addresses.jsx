import React from 'react';
import PropTypes from 'prop-types';

import Address from './Address';

const Addresses = ({ data: { first, second } }) => (
  <div>
    <Address name={first ? first.name : null} title={'Address 1'} />
    <Address name={second ? second.name : null} title={'Address 2'} />
  </div>
);

Addresses.propTypes = {
  data: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }).isRequired,
};

export default Addresses;
