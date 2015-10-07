	'use strict'
    var _ = require("lodash");
    
    var worker = function(list) {
		return  _.chain(list).sort()
				.map(function (word) {
					return (word + 'CHAINED').toUpperCase();
				});
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
