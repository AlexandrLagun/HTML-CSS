function Calculator () {

	var cache = {}; // в объекте cache храним кэшированные результаты в виде {cacheKey: result}
	var isFromCache = false;
	var operations = {'sum': sum, 'dif': dif, 
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

	this.isResultFromCache = function () {
		return isFromCache;
	};

	this.operation = function (a, b, operationKey) {
		var result;

		var cacheKey = a + operationKey + b; // создаем ключ кэшированной операции, под которым он будет записан в объект cache
		isFromCache = this.isCached(a, b, operationKey);
		if ( isFromCache ){ // если операция закэширована - возвращаем из кэша
			result = cache[cacheKey];
		} else {   // если операции в кэше нет - производим вычисление и заносим результат в кэш
			var operationFunction = operations[operationKey];
			result = operationFunction(a, b);
			cache[cacheKey] = result;
        }
        //добавляем в кэш обратные операции для сложения и умножения (a + b = b + a)
        if (operationKey === 'sum' || operationKey === 'mul' ) {
            var cacheKeySM = b + operationKey + a;
            cache[cacheKeySM] = result;
        }

		return result;
	};


	this.isCached = function (a, b, op){
		var result = false;
		var searchedKeys = [a + op + b];


		for (var key in searchedKeys) {
			if (cache[searchedKeys[key]]){
				result = true;
				break;
			}
		};

		return result;
	};
}

var calculator = new Calculator();
var str = calculator.operation(5,6, 'sum');
var bl = calculator.isCached(5,6,'sum');

console.log(str, bl);

//var str1 = calculator.operation(5,6, 'sum');
var bl1 = calculator.isCached(6,5,'sum');

console.log(bl1);


