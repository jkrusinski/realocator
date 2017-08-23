import React from 'react';
import PropTypes from 'prop-types';

const Address = ({ firstAddress, secondAddress, updateFirstAddress, updateSecondAddress }) => (
  <form>
    <input type="text" value={firstAddress} onChange={updateFirstAddress} />
    <input type="text" value={secondAddress} onChange={updateSecondAddress} />
    <input type="submit" />
  </form>
);

Address.propTypes = {
  firstAddress: PropTypes.string.isRequired,
  secondAddress: PropTypes.string.isRequired,
  updateFirstAddress: PropTypes.func.isRequired,
  updateSecondAddress: PropTypes.func.isRequired,
};

export default Address;
