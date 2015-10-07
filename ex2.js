    'use strict'
    var _ = require("lodash");
    
    var worker = function(list) {
    	return _.sortBy(list, 'quantity').reverse();
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;