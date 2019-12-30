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
                    elem1.innerHTML =  'too big length of the string!' ; 
                } else {
                     elem1.innerHTML = '';
                  }
            } 
             
            var result = textHandler(str, maxLength, maxRows, formatType);
           
            document.getElementById('result4').innerHTML = `Result: <br/><br/>${result}`;
            if (str === "") {
                document.getElementById('result4').innerHTML = `Please, enter a string`;
            }

            if (maxRows !== undefined && maxRows > 0) {
                var lines = result.split('<br/>').length;
                var elem2 = document.getElementById('max_row');
                if (lines - 1 > maxRows) { 
                    elem2.innerHTML = 'too much lines in the text!'; 
                } else {
                    elem2.innerHTML = '';
                  }
            }
        });