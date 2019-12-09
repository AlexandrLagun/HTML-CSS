
    var convertButton = document.getElementById('convert');
    convertButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('string2').value;
		    var systemFrom  = parseInt(document.getElementById('system_from').value);
		    var systemTo = parseInt(document.getElementById('system_to').value);
            var result = "";
            var re = /[0-9]|[a-f]/;
            var b = re.test(str);
        if ( systemFrom == 10 && systemTo == 2) {
            result = fromDecToBin(str);
        }
        if ( systemFrom == 2 && systemTo == 10) {
            result = fromBinToDec(str);
        } else {
            result = fromAnyToAny(str, systemFrom, systemTo);
        }
        var el6 =  document.getElementById('result_number');
        if (isNaN(result)) {
            el6.innerHTML = "Incorrect number!";
        } else 
        el6.innerHTML = result;
        });
    

    