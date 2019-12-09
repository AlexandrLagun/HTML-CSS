var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            
            var str  = document.getElementById("date").value;
            var formatFrom  = document.getElementById("date-from").value;
            var formatTo  = document.getElementById("date-to").value;

            try {
                if (isNaN(createDate(str, formatFrom))) {
                    throw new Error('Incorrect date!')
                }

                var date = createDate(str, formatFrom); 
                var res = formatDate(date, formatTo );
                document.getElementById('result3').innerHTML = res; 

            } catch(e) {
                document.getElementById('result3').innerHTML = e.message; 
            }
        
        });