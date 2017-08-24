import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import ResultItem from './ResultItem';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'paleturquoise',
    height: '600px',
    padding: '0 10px',
    borderRadius: '5px',
  },
  header: {
    width: '500px',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
};

const Results = ({ data, classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.box}>
      <h1 className={classes.header}>Results</h1>
      <ul className={classes.list}>
        { data.map(({ name, place_id: placeId, vicinity }) => (
          <ResultItem key={placeId} name={name} vicinity={vicinity} placeId={placeId} />
        ))}
      </ul>
    </div>
  </div>
);

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Results);
