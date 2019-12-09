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
            
            
             
           
        document.getElementById('result5').innerHTML = `Result: ${result}`;
        
        });





/*var calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('exp').value;
            var arr = [];
            if  (str.indexOf("+") !== -1) {
                if (str.split(" + ") == str) {
                    arr = str.split("+");
                } else {
                    arr = str.split(" + ");
                }
            }
            if  (str.indexOf("-") !== -1) {
                if (str.split(" - ") == str) {
                    arr = str.split("-");
                } else {
                    arr = str.split(" - ");
                }
            }
            if  (str.indexOf("*") !== -1) {
                if (str.split(" * ") == str) {
                    arr = str.split("*");
                } else {
                    arr = str.split(" * ");
                }
            }
            if  (str.indexOf("/") !== -1) {
                if (str.split(" / ") == str) {
                    arr = str.split("/");
                } else {
                    arr = str.split(" / ");
                }
            }
           

            for (var i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i].slice(1, arr[i].length - 1));
            }

            var result = "";

            if  (str.indexOf("+") !== -1) {
                result = sum(...arr);
            }
            if  (str.indexOf("-") !== -1) {
                result = dif(...arr);
            }
            if  (str.indexOf("*") !== -1) {
                result = mul(...arr);
            }
            if  (str.indexOf("/") !== -1) {
                result = div(...arr);
            }
            
            if (result != result.toFixed(0)) {
                result = result.toFixed(2);
            } 

            var strResult = String(result);
            if(strResult.length > 8) {
                result = result.toExponential(4);
            }
            
            
             
           
        document.getElementById('result5').innerHTML = `Result: ${result}`;
        
        });
 */