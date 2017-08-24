import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
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

const Actions = ({ classes, fetchResults, clearAddresses }) => (
  <div className={classes.actions}>
    <button className={classes.button} onClick={clearAddresses}>Clear Selection</button>
    <button className={classes.button} onClick={fetchResults}>Search Realtors</button>
  </div>
);

Actions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchResults: PropTypes.func.isRequired,
  clearAddresses: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Actions);
