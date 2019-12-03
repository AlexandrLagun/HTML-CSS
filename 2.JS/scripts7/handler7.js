function Handler () { 
	
	this.run = function (calculator, document) {
		document.getElementById('from_cache').style.display = '';
		var firstOperand  = parseInt(document.getElementById('first_operand').value);
		var secondOperand = parseInt(document.getElementById('second_operand').value);
		
		var operationName = document.getElementById('operation_select').value;

		document.getElementById('result_calculation').innerHTML = 
			calculator.operation(firstOperand, secondOperand, operationName);

		var message = '';
		if (calculator.isResultFromCache()){
			message = 'Result was taken from cache';
		} else {
			message = 'Calculated result';
		}

		document.getElementById('from_cache').innerHTML = message;
	};
}