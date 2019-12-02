
    var convertButton = document.getElementById('convert');
    convertButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('string2').value;
		    var systemFrom  = parseInt(document.getElementById('system_from').value);
		    var systemTo = parseInt(document.getElementById('system_to').value);
            var result = "";
        if ( systemFrom == 10 && systemTo == 2) {
            result = fromDecToBin(str);
        }
        if ( systemFrom == 2 && systemTo == 10) {
            result = fromBinToDec(str);
        } else {
            result = fromAnyToAny(str, systemFrom, systemTo);
        }
        
        document.getElementById('result_number').innerHTML = result;
        });
    

    