var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            
            var str  = document.getElementById("date").value;
            var formatFrom  = document.getElementById("date-from").value;
            var formatTo  = document.getElementById("date-to").value;
            var date = createDate(str, formatFrom);
            document.getElementById('tmp').innerHTML = date ;
        
            var res = formatDate(date, formatTo );
            //console.log(formatDate(date, formatTo));
            //var sr = String(result); 
            
            document.getElementById('result').innerHTML = res; 
        });