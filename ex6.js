	'use strict'
    var _ = require("lodash");
    
    var worker = function(a) {
		var retArr = a;
		retArr = _.groupBy(retArr, 'username');
		retArr = _.sortBy(retArr, function (item){
			// in progress
		});
    };
    
    // export the worker function as a nodejs module
    module.exports = worker;
