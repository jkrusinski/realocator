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

const Addresses = ({ data: { first, second }, clearAddresses, inputs, search, classes }) => (
  <div>
    <div className={classes.container}>
      <Address
        name={first ? first.name : null}
        title={'Address 1'}
        input={inputs[0]}
        search={query => search(query, null)}
      />
      <Address
        name={second ? second.name : null}
        title={'Address 2'}
        input={inputs[1]}
        search={query => search(null, query)}
      />
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
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Addresses);
