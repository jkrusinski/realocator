import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Address from './Address';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '30px',
  },
};

const Addresses = (props) => {
  const {
    addresses: { first, second },
    inputs, search, suggestions, selectAddress, classes,
  } = props;

  return (
    <div>
      <div className={classes.container}>
        <Address
          name={first ? first.name : ''}
          title={'Address 1'}
          input={inputs[0]}
          search={query => search(query, null)}
          selectAddress={address => selectAddress(address, null)}
          suggestions={suggestions[0]}
        />
        <Address
          name={second ? second.name : ''}
          title={'Address 2'}
          input={inputs[1]}
          search={query => search(null, query)}
          selectAddress={address => selectAddress(null, address)}
          suggestions={suggestions[1]}
        />
      </div>
    </div>
  );
};

Addresses.propTypes = {
  addresses: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectAddress: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Addresses);
