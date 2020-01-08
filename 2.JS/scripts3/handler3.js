var formatButton = document.getElementById('format_sentence');
    formatButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('string1').value;
            var maxLength  = document.getElementById('max_length').value;
            var maxRows  = document.getElementById('max_row_count').value;
            var formatType  = document.getElementById('format_type').value;
           
            if (maxLength !== undefined && maxLength > 0) {

                var elem1 = document.getElementById('alert_max_length');
                if (str.length > maxLength) { 
                    elem1.innerHTML =  'Too big length of the string! String was shortened.' ; 
                    str = str.slice(0, maxLength);
                } else {
                     elem1.innerHTML = '';
                  }
                
            } 
             
            var result = textHandler(str, maxLength, maxRows, formatType);

            if (maxRows !== undefined && maxRows > 0) {

                var lines = result.split('<br/>');
                var elem2 = document.getElementById('max_row');
                if (lines.length > maxRows) { 
                    elem2.innerHTML =  `Big number of rows! Only ${maxRows} lines will be shown.`; 
                    var i = 0;
                    result = "";

                    while(i < maxRows) {
                        result += lines[i] + "<br/>";
                        i++; 
                    }
        

                } else {
                    elem2.innerHTML = '';
                 }
                
            }



            document.getElementById('result4').innerHTML = `Result: <br/><br/>${result}`;
            if (str === "") {
                document.getElementById('result4').innerHTML = `Please, enter a string`;
            }
        });