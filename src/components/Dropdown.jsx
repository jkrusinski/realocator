import React, { Component } from 'react';
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
