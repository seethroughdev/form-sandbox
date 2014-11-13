'use strict';

/**
 * @jsx React.DOM
 */

 module.exports = function() {

    var isValid = this.state.isValid ? 'is-valid' : 'is-error';
    var isActive = this.state.isActive ? ' is-active': '';

    /*jshint ignore:start */
    return (
      <div className={'field__container ' + isValid + isActive}>
        <label htmlFor={this.props.data.id}>{this.props.data.label}</label>
        <input
          id={this.props.data.id}
          value={this.state.defaultValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.data.placeholder}
          type={this.props.data.type} />
        <span className="field__help-msg field__message">{this.props.data.helpMsg}</span>
        <span className="field__error-msg field__message">{this.props.data.errorMsg}</span>
      </div>
    )
    /*jshint ignore:end */
  }
