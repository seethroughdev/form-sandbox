'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');
var FieldMixins = require('./mixins');

module.exports = React.createClass({

  mixins: [FieldMixins],

  render: function() {
    /*jshint ignore:start */

    var isValid = this.state.isValid && this.state.defaultValue !== '' ? ' is-valid' : '';
    var isError = !this.state.isValid && this.state.defaultValue !== '' ? ' is-error' : '';
    var isActive = this.state.isActive ? ' is-active': '';

    /*jshint ignore:start */
    return (
      <div className={'field__container' + isValid + isError + isActive}>
        <label htmlFor={this.props.id}>{this.props.data.label}</label>

        <input
          id={this.props.id}
          value={this.state.defaultValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.data.placeholder}
          min={this.props.data.min}
          max={this.props.data.max}
          required={this.props.data.required}
          type={this.props.data.type || this.props.type} />

        <span className="field__help-msg field__message">{this.props.data.helpMsg}</span>
        <span className="field__error-msg field__message">{this.props.data.errorMsg}</span>
      </div>
    )
    /*jshint ignore:end */

  }
});
