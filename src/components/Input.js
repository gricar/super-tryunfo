import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { description, name, value, type = 'text', testid } = this.props;
    return (
      <label htmlFor={ name }>
        { description }

        { type === 'textarea'
          ? <textarea id={ name } name={ name } value={ value } data-testid={ testid } />
          :
          <input
            type={ type }
            id={ name }
            name={ name }
            value={ value }
            data-testid={ testid }
          />}
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
