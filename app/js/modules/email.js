'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');
var TextFieldMixin = require('./mixins');

var EmailField = React.createClass({

  mixins: [TextFieldMixin],

  getDefaultProps: function() {
    return {
      type: 'text'
    }
  },

  isValid: function(val) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(val);
  },

  render: function() {

    var isValid = this.state.isValid && this.state.defaultValue !== '' ? ' is-valid' : '';
    var isError = !this.state.isValid && this.state.defaultValue !== '' ? ' is-error' : '';
    var isActive = this.state.isActive ? ' is-active': '';

    /*jshint ignore:start */
    return (
      <div className={'field__container' + isValid + isError + isActive}>
        <label htmlFor={this.props.data.id}>{this.props.data.label}</label>
        <input
          id={this.props.data.id}
          value={this.state.defaultValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.data.placeholder}
          min={this.props.min}
          max={this.props.max}
          type={this.props.type} />
        <span className="field__help-msg field__message">{this.props.data.helpMsg}</span>
        <span className="field__error-msg field__message">{this.props.data.errorMsg}</span>
      </div>
    )
    /*jshint ignore:end */
  }
});

module.exports = EmailField;
