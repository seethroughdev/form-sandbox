/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var _ = require('lodash');
var FieldGroup = require('../modules/field-group');
var Field = require('../modules/field');

var formData = [
  [
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
    },
  ],
  [
    {
      label: 'Age',
      type: 'number',
      helpMsg: 'Enter your age',
      min: 10,
      max: 100,
      errorMsg: 'Must be your real age!'
    },
    {
      placeholder: 'Something nice.',
      label: 'Message:',
      required: true,
      errorMsg: 'This is required!'
    }
  ]

];


module.exports = React.createClass({

  render: function() {
    /*jshint ignore:start */

    var data = formData;

    return (
      <form>
        {_.map(data, function(obj, i) {
          if (Array.isArray(obj)) {
            return <FieldGroup data={obj} key={i} id={'field-group-' + i} />
          }
          return <Field data={obj} key={i} type={obj.type} id={'field-' + i} />
        })}
      </form>
    );
    /*jshint ignore:end */
  }
});
