/**
 * File Name       : Utility.js
 * Author          : Asheesh Sahu
 * Last update     : Aug 10 2017
 * Version         : 1.0
 * Deoendency      : No any dependency ( Core javascript library )
 * Last Updated By : Asheesh Sahu
 **/
var Utility = {};

Utility.isEmail = function(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = Utility;