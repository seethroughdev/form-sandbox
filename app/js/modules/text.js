'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');
var FieldMixins = require('./mixins');

var TextField = React.createClass({

  mixins: [FieldMixins.TextFieldMixin],

  getDefaultProps: function() {
    return {
      type: 'email'
    }
  },

  isValid: function(val) {
    return true;
  },

  render: function() {

    /*jshint ignore:start */
    return (
      <input
        id={this.props.data.id}
        value={this.state.defaultValue}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        placeholder={this.props.data.placeholder}
        min={this.props.data.min}
        max={this.props.data.max}
        type={this.props.type} />
    )
    /*jshint ignore:end */
  }

});

module.exports = TextField;
