var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
<<<<<<< HEAD
            
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
=======
            var str  = document.getElementById('date').value;
            var formatFrom  = document.getElementById('date_from').value;
            var formatTo  = document.getElementById('date_to').value;
            

            var date = createDate(str, formatFrom);

            document.getElementById('tmp').innerHTML = formatTo ;

            var result = formatDate(date, formatTo);
           
        document.getElementById('result_date').innerHTML = date ;
        
        });
            
            
             
           
      
        
     
>>>>>>> 1baec9aaf5e91a957353acc59d73c57b58afaa7a
