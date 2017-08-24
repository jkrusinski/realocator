import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Dropdown from './Dropdown';

const styles = {
  box: {
    width: '300px',
    backgroundColor: 'violet',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    textAlign: 'center',
  },
  input: {
    marginTop: '10px',
    fontSize: '18px',
    fontFamily: 'inherit',
    padding: '5px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    border: 'none',
    backgroundColor: 'pink',
    '&:focus, &:active': {
      outline: 'none',
      backgroundColor: 'palevioletred',
    },
  },
  selected: {
    fontWeight: 'bold',
  },
};

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      focus: true,
    });
  }

  onBlur() {
    this.setState({
      focus: false,
    });
  }

  render() {
    const { classes, name, title, input, search, suggestions, selectAddress } = this.props;
    return (
      <div>
        <div className={classes.box}>
          <h1>{title}</h1>
          <div className={name ? classes.selected : null}>{name || 'Search below...'}</div>
          <input
            type="text"
            value={input}
            onChange={e => search(e.target.value)}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={classes.input}
          />
        </div>
        <Dropdown
          suggestions={suggestions}
          selectAddress={selectAddress}
          focus={this.state.focus}
        />
      </div>
    );
  }
}

Address.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectAddress: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Address);
