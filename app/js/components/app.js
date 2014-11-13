/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var _ = require('lodash');
var Field = require('../modules/field');

var formData = [
  {
    placeholder: 'johnny@appleseed.com',
    type: 'email',
    label: 'Email',
    helpMsg: 'Enter your email',
    errorMsg: 'Must be valid email address',
    required: true,
    min: 12
  },
  {
    placeholder: 'Johnny',
    label: 'First',
    helpMsg: 'Enter your first name',
    errorMsg: 'Must be a real first name!',
    required: true,
    min: 4
  },
  {
    placeholder: 'Appleseed',
    label: 'Last',
    helpMsg: 'Enter your last name',
    errorMsg: 'Must be a real last name!'
  }
];


module.exports = React.createClass({

  render: function() {
    /*jshint ignore:start */

    var data = formData;

    return (
      <form>
        {_.map(data, function(field, i) {
          return <Field data={field} key={i} type={field.type} id={'field-' + i} />
        })}
      </form>
    );
    /*jshint ignore:end */
  }
});
