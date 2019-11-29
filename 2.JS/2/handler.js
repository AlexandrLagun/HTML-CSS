var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('date').value;
            var formatFrom  = document.getElementById('date_from').value;
            var formatTo  = document.getElementById('date_to').value;
            

            var date = createDate(str, formatFrom);

            document.getElementById('tmp').innerHTML = formatTo ;

            var result = formatDate(date, formatTo);
           
        document.getElementById('result_date').innerHTML = date ;
        
        });
            
            
             
           
      
        
     