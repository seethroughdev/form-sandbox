'use strict';

var validate = require('./validate');

/**
* @jsx React.DOM
*/

var FieldMixin = {

  getInitialState: function() {
    return {
      defaultValue: '',
      isValid: true,
      isActive: false
    };
  },

  getDefaultProps: function() {
    return {
      type: 'text',
      data: {
        placeholder: null,
        label: null,
        helpMsg: null,
        errorMsg: null,
        required: false,
        min: false,
        max: false
      }
    };
  },

  isValid: function(val) {
    if (typeof validate[this.props.type] !== 'undefined') {
      return validate[this.props.type](val);
    }
    return true;
  },

  handleChange: function(e) {
    this.setState({
      defaultValue: e.target.value,
      isValid: this.isValid(e.target.value)
    })
  },

  handleFocus: function(e) {
    this.setState({
      isActive: true
    });
  },

  handleBlur: function(e) {
    this.setState({
      isActive: false
    });
  }

};

module.exports = FieldMixin;
