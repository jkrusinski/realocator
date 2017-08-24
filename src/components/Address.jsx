/* global document */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

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
    setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 200);
  }

  render() {
    const { name, title, input, search, suggestions, selectAddress } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <div>{name || 'Search below...'}</div>
        <input
          type="text"
          value={input}
          onChange={e => search(e.target.value)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
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
};

export default Address;
