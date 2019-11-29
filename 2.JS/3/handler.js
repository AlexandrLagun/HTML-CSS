var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('string').value;
            var maxLength  = document.getElementById('max_length').value;
            var maxRows  = document.getElementById('max_row_count').value;
            var formatType  = document.getElementById('format_type').value;
            
            var result = textHandler(str, maxLength, maxRows, formatType);
            
             
           
        document.getElementById('result_string').innerHTML = `Result: ${result}`;
        
        });