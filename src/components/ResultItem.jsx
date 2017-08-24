import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  item: {
    padding: '5px',
    margin: '5px',
    backgroundColor: 'salmon',
    borderRadius: '5px',
  },
  title: {
    fontSize: '16px',
  },
  vicinity: {
    fontSize: '14px',
  },
};

const ResultItem = ({ classes, name, vicinity }) => (
  <li className={classes.item}>
    <div className={classes.title}>{name}</div>
    <div className={classes.vicinity}>{vicinity}</div>
  </li>
);

ResultItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  vicinity: PropTypes.string.isRequired,
};

export default injectSheet(styles)(ResultItem);
