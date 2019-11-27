function Calculator () {
	'use strict';

	var _cache = {};
	var _isResultFromCache = false;
	var _operations = {'add': _add, 'sub': _sub, 
		'multipe': _multiple, 'division': _division, 
		'pow': _pow, 'log': _log
	};

	//Operation methods:
	function _add(a, b) {
		return a + b;
	}

	function _sub(a, b) {
		return a - b;
	}

	function _multiple(a, b) {
		return a * b;
	}

	function _division(a, b) {
		return a / b;
	}

	function _pow(a, b) {
		return Math.pow(a, b);
	}	

	function _log(a, b){
		return Math.log(a) / Math.log(b);
	}


	this.islastResultFromCache = function () {
		return _isResultFromCache;
	};


	this.operation = function (a, b, operationKey) {
		var result;

		var cacheKey = a + operationKey + b;
		_isResultFromCache = this.isCached(a, b, operationKey);
		if ( _isResultFromCache ){
			result = _cache[cacheKey];
		} else {
			var operationFunction = _operations[operationKey];
			result = operationFunction(a, b);
			_cache[cacheKey] = result;
		}

		return result;
	};


	this.isCached = function (a, b, op){
		var result = false;
		var searchedKeys = [a + op + b];

		//add revers key for operation: + and *
		if (op === 'add' || op === 'multipe' ){
			searchedKeys.push(b + op + a);
		}

		for (var key in searchedKeys) {
			if (_cache[searchedKeys[key]]){
				result = true;
				break;
			}
		};

		return result;
	};
}