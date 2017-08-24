import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  item: {
    padding: '5px',
    margin: '5px',
    color: 'black',
    backgroundColor: 'salmon',
    borderRadius: '5px',
  },
  title: {
    fontSize: '16px',
  },
  vicinity: {
    fontSize: '14px',
  },
  link: {
    textDecoration: 'none',
  },
};

const ResultItem = ({ classes, name, vicinity, placeId }) => (
  <a className={classes.link} href={`https://www.google.com/maps/place/?q=place_id:${placeId}`} target="_blank">
    <li className={classes.item}>
      <div className={classes.title}>{name}</div>
      <div className={classes.vicinity}>{vicinity}</div>
    </li>
  </a>
);

ResultItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  vicinity: PropTypes.string.isRequired,
  placeId: PropTypes.string.isRequired,
};

export default injectSheet(styles)(ResultItem);
