import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ position, suggestions, selectAddress }) => (
  <ul>
    {suggestions.map(({ description, place_id }) => (
      <a
        onClick={() => selectAddress(position, place_id)}
        role="button"
        tabIndex="-1"
      >
        <li>{description}</li>
      </a>
    ))}
  </ul>
);

Dropdown.propTypes = {
  position: PropTypes.oneOf(['first', 'second']).isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectAddress: PropTypes.func.isRequired,
};

module.exports = Dropdown;
