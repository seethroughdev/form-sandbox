'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');
var _ = require('lodash');

var FieldMixins = require('./mixins');
var Field = require('./field');


module.exports = React.createClass({


  render: function() {

    /*jshint ignore:start */
    return (
      <div className="field__group">
        {_.map(this.props.data, function(field, i) {
          return <Field data={field} key={i} type={field.type} id={'field-' + i} />
        })}
      </div>
    )
    /*jshint ignore:end */

  }
});
