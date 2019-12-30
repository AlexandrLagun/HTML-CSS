var convertButton = document.getElementById('convert');
convertButton.addEventListener( 'click', 
    function () {
        var str  = document.getElementById('string2').value;
        var systemFrom  = parseInt(document.getElementById('system_from').value);
        var systemTo = parseInt(document.getElementById('system_to').value);
        var result = "";
        if ( systemFrom == 10 && systemTo == 2) {
            result = obj6.decToBin(str);
        }
        if ( systemFrom == 2 && systemTo == 10) {
            result = obj6.binToDec(str);
        } else {
            result = obj6.anyToAny(str, systemFrom, systemTo);
        }
        
        var el6 =  document.getElementById('result_number');

        if (str === "") {
            el6.innerHTML = "Empty string!";
        } else
        if (str.length > 21) {
            el6.innerHTML = "Too big number!";
        } else
        if (isNaN(result) ) {
            el6.innerHTML = "Incorrect number!";
        } else 
        el6.innerHTML = result;
    });

    