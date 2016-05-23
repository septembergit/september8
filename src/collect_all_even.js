'use strict';

function collectAllEven (collection) {
	var result = [],
	    collectionStirng = collection.toString(),
            i = 0;
        collectionStirng.replace(/\d?[02468]/g, function($1) {
        	result[i] = parseInt($1);
        	i++;
        }); 
	return result;
}

module.exports = collectAllEven;
