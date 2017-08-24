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
    height: '640px',
    width: '500px',
    padding: '0 10px',
    borderRadius: '5px',
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  instructions: {
    textAlign: 'center',
    width: '300px',
    margin: '100px auto',
    fontSize: '20px',
  },
  disclaimer: {
    marginLeft: '5px',
    fontSize: '14px',
  },
};

const Results = ({ data, classes }) => (
  <div className={classes.wrapper}>
    <div className={classes.box}>
      <h1 className={classes.header}>{data.length ? 'Results' : 'REALocator'}</h1>
      {data.length
        ? (
          <div>
            <ul className={classes.list}>
              { data.map(({ name, place_id: placeId, vicinity }) => (
                <ResultItem key={placeId} name={name} vicinity={vicinity} placeId={placeId} />
              ))}
            </ul>
            <div className={classes.disclaimer}>* Results listed from closest to furthest</div>
          </div>
        ) : (
          <div className={classes.instructions}>
            <p>Welcome to REALocator!</p>
            <p>Find the closest Real Estate Agencies between two locations. Start by entering addresses into the fields above.</p>
          </div>
        )
      }

    </div>
  </div>
);

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Results);
