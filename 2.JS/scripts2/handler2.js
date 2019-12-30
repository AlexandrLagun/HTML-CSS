var obj2 = {
    createDate: createDate,
    formatDate: formatDate,
    fromNow: fromNow
}


var formatButton = document.getElementById('format');
    formatButton.addEventListener( 'click', 
        function () {
            
            var str  = document.getElementById("date").value;
            var formatFrom  = document.getElementById("date-from").value;
            var formatTo  = document.getElementById("date-to").value;
            var el = document.getElementById("error3");
            el.innerHTML = "";
            var el1 = document.getElementById("result3");
            el1.innerHTML = "";
            var elFrom = document.getElementById("fromnow").innerHTML = '';
            
                if (str === "") {
                    document.getElementById('error3').innerHTML = "Empty string!"; 
                    return;
                }

                if (isNaN(obj2.createDate(str, formatFrom)) ) {
                    document.getElementById('error3').innerHTML = "Incorrect data!"; 
                    return;
                }

                var date = obj2.createDate(str, formatFrom); 
                var res = obj2.formatDate(date, formatTo );
                document.getElementById('result3').innerHTML = res;
                var resFrom = obj2.fromNow(date);    
                document.getElementById("fromnow").innerHTML = resFrom + " year(s) ago";

        });