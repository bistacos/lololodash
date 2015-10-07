	'use strict'
    var _ = require("lodash");
    
var worker = function(cities) {

    var result = {
    	hot: [],
    	warm: []
    };

    _.forEach(cities, function (temps, city) {
    	if (_.every(temps, checkTemp)) {
    		result.hot.push(city);
    	} else if (_.some(temps, checkTemp)) {
    		result.warm.push(city);
    	}
    });
	
	//console.log(result);
	return result;

	// helper functions
	function checkTemp(temperature){
		return temperature > 19;
	};
};
    
    // export the worker function as a nodejs module
    module.exports = worker;
