import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Address from './Address';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  actions: {
    width: '100%',
    textAlign: 'center',
  },
  button: {
    margin: '20px 10px',
    padding: '20px',
    backgroundColor: 'lime',
    fontFamily: 'inherit',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      outline: 'none',
      backgroundColor: 'limegreen',
    },
    '&:focus': {
      outline: 'none',
    },
  },
};

const Addresses = ({ addresses: { first, second }, clearAddresses, inputs, search, fetchResults, suggestions, selectAddress, classes }) => (
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
    <div className={classes.actions}>
      <button className={classes.button} onClick={clearAddresses}>Clear Selection</button>
      <button className={classes.button} onClick={fetchResults}>Search Realtors</button>
    </div>
  </div>
);

Addresses.propTypes = {
  addresses: PropTypes.shape({
    first: PropTypes.object,
    second: PropTypes.object,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  clearAddresses: PropTypes.func.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectAddress: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Addresses);
