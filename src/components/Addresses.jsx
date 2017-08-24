import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Address from './Address';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  clearSelection: {
    width: '100%',
    textAlign: 'center',
  },
};

const Addresses = ({ data: { first, second }, clearAddresses, inputs, classes }) => (
  <div>
    <div className={classes.container}>
      <Address name={first ? first.name : null} title={'Address 1'} />
      <Address name={second ? second.name : null} title={'Address 2'} />
    </div>
    <div className={classes.clearSelection}>
      <button onClick={clearAddresses}>Clear Selection</button>
    </div>
  </div>
);

Addresses.propTypes = {
  data: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  clearAddresses: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Addresses);
