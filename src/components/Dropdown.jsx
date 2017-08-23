import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ suggestions }) => (
  <ul>
    {suggestions.map(({ description }) => (
      <li>{description}</li>
    ))}
  </ul>
);

Dropdown.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

module.exports = Dropdown;
