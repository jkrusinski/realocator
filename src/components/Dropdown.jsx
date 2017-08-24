import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  list: {
    position: 'absolute',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    borderRadius: '5px',
    backgroundColor: 'pink',
    marginTop: '2px',
    overflow: 'hidden',
  },
  item: {
    padding: '7px',
    display: 'block',
    '&:hover': {
      backgroundColor: 'violet',
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  render() {
    const { suggestions, selectAddress, focus, classes } = this.props;
    if ((focus || this.state.hover) && suggestions.length) {
      return (
        <ul
          className={classes.list}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {suggestions.map(({ description, place_id: placeId }) => (
            <a
              onClick={() => selectAddress(placeId)}
              role="button"
              tabIndex="-1"
              key={placeId}
              className={classes.item}
            >
              <li>{description}</li>
            </a>
          ))}
        </ul>
      );
    }
    return null;
  }
}

Dropdown.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectAddress: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  focus: PropTypes.bool.isRequired,
};

export default injectSheet(styles)(Dropdown);
