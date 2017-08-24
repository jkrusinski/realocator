import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  list: {
    backgroundColor: 'white',
    position: 'absolute',
    listStyle: 'none',
    border: '1px black solid',
    margin: '0',
    padding: '0',
  },
};

const Dropdown = ({ suggestions, selectAddress, focus, classes }) => {
  if (focus && suggestions.length) {
    return (
      <ul className={classes.list}>
        {suggestions.map(({ description, place_id: placeId }) => (
          <a
            onClick={() => selectAddress(placeId)}
            role="button"
            tabIndex="-1"
            key={placeId}
          >
            <li>{description}</li>
          </a>
        ))}
      </ul>
    );
  }
  return null;
};

Dropdown.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectAddress: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  focus: PropTypes.bool.isRequired,
};

export default injectSheet(styles)(Dropdown);
