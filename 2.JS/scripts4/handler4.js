var calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('exp').value;
            var arr = [];
        try {
            if  (str.indexOf("+") !== -1) {
                    arr = str.split("+");
            } else if  (str.indexOf("-") !== -1) {
                arr = str.split("-");
            } else if  (str.indexOf("*") !== -1) {
                arr = str.split("*");
            } else if  (str.indexOf("/") !== -1) {
                arr = str.split("/");
            } else {
                throw new Error("Mistake1! There is no any math operation");
            }
        } catch (e) {
            document.getElementById('result5').innerHTML = e.message;

        }
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

            if  (str.indexOf("+") !== -1) {
                result = sum(...resArr);
            }
            if  (str.indexOf("-") !== -1) {
                result = dif(...resArr);
            }
            if  (str.indexOf("*") !== -1) {
                result = mul(...resArr);
            }
            if  (str.indexOf("/") !== -1) {
                result = div(...resArr);
            }
            
            if (result != result.toFixed(0)) {
                result = result.toFixed(2);
            } 

            var strResult = String(result);
            if(strResult.length > 8) {
                result = result.toExponential(4);
            }
            
            
             
           
        var el4 = document.getElementById('result5');
        if (isNaN(result)) { 
            el4.innerHTML = `Mistake: Incorrect input.`;
        } else {
            el4.innerHTML = `Result: ${result}`;
        }
        });


