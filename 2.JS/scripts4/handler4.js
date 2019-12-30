var calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('exp').value;
            var op = document.getElementById("operation_type").value;
            var arr = [];

            arr = str.split(",");

            var resArr = [];

            for (var j = 0; j < arr.length; j++) {

                if(arr[j].indexOf('\'') !== -1) {
                    var fst = arr[j].indexOf('\'');
                    var scd = arr[j].indexOf('\'', fst+1);  
                }
                if(arr[j].indexOf('\"') !== -1) {
                    var fst = arr[j].indexOf('\"');
                    var scd = arr[j].indexOf('\"', fst+1);  
                } 

                resArr.push(arr[j].slice(fst+1, scd));
            }
           
            var result = "";

            if (op === "sum") {
                result = obj4.sum(...resArr);
            }
            if (op === "dif") {
                result = obj4.dif(...resArr);
            }
            if (op === "mul") {
                result = obj4.mul(...resArr);
            }
            if (op === "div") {
                result = obj4.div(...resArr);
            }
            
            if (result != result.toFixed(0)) {
                result = result.toFixed(2);
            } 

            var strResult = String(result);
            if(strResult.length > 8) {
                result = result.toExponential(4);
            }

            var el4 = document.getElementById('result5');

       
            if (str === "") { 
                el4.innerHTML = `Mistake: There is no any expression.`;
            } else 
            if (isNaN(result)) {
                el4.innerHTML = `Mistake: Incorrect input.`;
            } else el4.innerHTML = `Result: ${result}`;
            });

        
