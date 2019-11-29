var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('string').value;
            var maxLength  = document.getElementById('max_length').value;
            var maxRows  = document.getElementById('max_row_count').value;
            var formatType  = document.getElementById('format_type').value;
            
            var result = textHandler(str, maxLength, maxRows, formatType);
            
            if (maxLength !== undefined && maxLength > 0 ) {
                var elem1 = document.getElementById('max_length');
                elem1.innerHTML = 'too big length of the string!';
            } 
            
            if (maxRowCount !== undefined && maxRowCount > 0 ) {
                var lines = str.split('\n').length;
                if(lines > maxRowCount) var sr = 'too big number of the rows!';
            }
             
           
        document.getElementById('result_string').innerHTML = `Result: ${result}`;
        
        });