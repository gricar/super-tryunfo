import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { description, name, value, onInputChange, type = 'text', testid } = this.props;
    return (
      <label htmlFor={ name }>
        { description }
        <input
          type={ type }
          id={ name }
          name={ name }
          data-testid={ testid }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
