import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ position, suggestions, selectAddress }) => (
  <ul>
    {suggestions.map(({ description, place_id: placeId }) => (
      <a
        onClick={() => selectAddress(position, placeId)}
        role="button"
        tabIndex="-1"
        key={placeId}
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
