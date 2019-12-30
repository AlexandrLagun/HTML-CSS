var calculateButton = document.getElementById('calculateop');
calculateButton.addEventListener( 'click', 
    function () {
		var firstOperand  = parseFloat(document.getElementById('first_operand').value);
		var secondOperand = parseFloat(document.getElementById('second_operand').value);
		
        var operationName = document.getElementById('operation_select').value;
        document.getElementById('result_calculation').innerHTML = '';
        document.getElementById('from_cache').innerHTML = '';


        var result = objCalculate.operation(firstOperand, secondOperand, operationName);
        if (isNaN(result)) {
            document.getElementById('result_calculation').innerHTML = "Enter both operands!";

        } else {
            document.getElementById('result_calculation').innerHTML = result;
            
            var message = '';
            if (isFromCache){
                message = 'Result was taken from cache';
            } else {
                message = 'Calculated result';
            }

            document.getElementById('from_cache').innerHTML = message;
        }    	
});