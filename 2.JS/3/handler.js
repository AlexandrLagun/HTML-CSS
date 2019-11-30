var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('string').value;
            var maxLength  = document.getElementById('max_length').value;
            var maxRows  = document.getElementById('max_row_count').value;
            var formatType  = document.getElementById('format_type').value;
<<<<<<< HEAD

            if (maxLength !== undefined && maxLength > 0) {
                var elem1 = document.getElementById('alert_max_length');
                if (str.length > maxLength) { 
                    elem1.innerHTML =  'too big length of the string!' ; 
                } else {
                     elem1.innerHTML = '';
                  }
            } 
=======
            
            var result = textHandler(str, maxLength, maxRows, formatType);
            
            if (maxLength !== undefined && maxLength > 0 ) {
                var elem1 = document.getElementById('max_length');
                elem1.innerHTML = 'too big length of the string!';
            } 
            
            if (maxRowCount !== undefined && maxRowCount > 0 ) {
                var lines = str.split('\n').length;
                if(lines > maxRowCount) var sr = 'too big number of the rows!';
            }
>>>>>>> 1baec9aaf5e91a957353acc59d73c57b58afaa7a
             
            var result = textHandler(str, maxLength, maxRows, formatType);

            document.getElementById('result_string').innerHTML = `Result: <br/><br/>${result}`;

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