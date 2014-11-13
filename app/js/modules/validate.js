'use strict';

var validate = {

  text: function(val) {
    return true;
  },

  email: function(val) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(val);
  }

};

module.exports = validate;
