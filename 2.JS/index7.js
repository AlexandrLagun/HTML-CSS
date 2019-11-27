function Calculator () {
	'use strict';

	var _cache = {}; // в объекте cashe храним кэшированные результаты
	var _isResultFromCache = false;
	var _operations = {'sum': sum, 'dif': dif, 
		'mul': mul, 'div': div

	};

	function sum(a, b) {
		return a + b;
	}

	function dif(a, b) {
		return a - b;
	}

	function mul(a, b) {
		return a * b;
	}

	function div(a, b) {
		return a / b;
	}

	this.islastResultFromCache = function () {
		return _isResultFromCache;
	};


	this.operation = function (a, b, operationKey) {
		var result;

		var cacheKey = a + operationKey + b; // создаем ключ кэшированной операции, под которым он будет записан в объект cashe
		_isResultFromCache = this.isCached(a, b, operationKey);
		if ( _isResultFromCache ){ // если операция закэширована - возвращаем из кэша
			result = _cache[cacheKey];
		} else {   // если операции в кэше нет - производим вычисление и заносим результат в кэш
			var operationFunction = _operations[operationKey];
			result = operationFunction(a, b);
			_cache[cacheKey] = result;
		}

		return result;
	};


	this.isCached = function (a, b, op){
		var result = false;
		var searchedKeys = [a + op + b];

		//добавляем в кэш обратные операции для сложения и умножения (a + b = b + a)
		if (op === 'sum' || op === 'mul' ){
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

var calculator = new Calculator();
var str = calculator.operation(5,6, 'sum');
console.log(str);
var bl = calculator.isCached(5,6,'sum');
var bl1 = calculator.isCached(5,8, 'mul')
console.log(bl, bl1);
