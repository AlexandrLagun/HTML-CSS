var objCalculate = {
	operation: operation,
};

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

var checkSum = document.getElementById("sum");
var checkDif = document.getElementById("dif");
var checkMul = document.getElementById("mul");
var checkDiv = document.getElementById("div");  

function operation(a, b, operationKey) {
	var res;

	var cacheKey = a + operationKey + b; // создаем ключ кэшированной операции, под которым он будет записан в объект cache
	isFromCache = isCached(a, b, operationKey);
	if ( isFromCache ){ // если операция закэширована - возвращаем из кэша
		res = cache[cacheKey];
	} else {   // если операции нет в кэше-  вычисляем результат и заносим его в кэш
		//добавляем в кэш обратные операции для сложения и умножения (a + b = b + a || a * b = b * a)
		var operationFunction = operations[operationKey];
		res = operationFunction(a, b);

		if (operationKey === "sum" && checkSum.checked) {
			cache[cacheKey] = res;
			var cacheKeySM = b + operationKey + a;
			cache[cacheKeySM] = res;
		}

		if (operationKey === "mul" && checkMul.checked) {
			cache[cacheKey] = res;
			var cacheKeySM = b + operationKey + a;
			cache[cacheKeySM] = res;
		}

		if (operationKey === "dif" && checkDif.checked) {
			cache[cacheKey] = res;
		}

		if (operationKey === "div" && checkDiv.checked) {
			cache[cacheKey] = res;
		}
	}

	var result = (Number.isInteger(res)) ? res : res.toFixed(2);
	return result;
};

// проверяем есть ли операция в кеше по ключу
	function isCached(a, b, op){
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


