import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ data }) => (
  <ul>
    { data.map(({ name, place_id: placeId }) => (
      <a key={placeId}>
        <li>{name}</li>
      </a>
    ))}
  </ul>
);

Results.propTypes = {};

export default Results;
