
var findMaxSumButton = document.getElementById('subMaxSum');
findMaxSumButton.addEventListener( 'click', 
    function () {
      
        var strArr = document.getElementById("string").value;
        var arrSpl = strArr.split(",");

        var art = [];
        for (var i = 0; i < arrSpl.length; i++) {
            art[i] = Number(arrSpl[i]); 
        } 

        try {
                for(var k = 0; k < art.length; k++ ) {
                    if (isNaN(art[k])) 
                        throw new Error('Incorrect data!');
                }
                var res1 = getSeqMaxSum( art );
                
                var el1 = document.getElementById("result"); 
                el1.innerHTML = res1;
        }  catch (e) {
            var el1 = document.getElementById("result"); 
            el1.innerHTML = e.message;
        } 


        
});

var findMaxSeqButton = document.getElementById('selectMaxSeq');
    findMaxSeqButton.addEventListener( 'click', 
        function () {
          
            var strArr = document.getElementById("string").value;
            var arrSpl = strArr.split(",");

            var art = [];
            for (var i = 0; i < arrSpl.length; i++) {
                art[i] = Number(arrSpl[i]); 
            } 

            try {
                for(var k = 0; k < art.length; k++ ) {
                    if (isNaN(art[k])) 
                        throw new Error('Incorrect data!');
                }
               
                var res = maxIncreaseSeq( art );
                
                var el2 = document.getElementById("result1"); 
                el2.innerHTML = res;
            }  catch (e) {
                var el2 = document.getElementById("result1"); 
                el2.innerHTML = e.message;
            } 

        }); 

var searchButton = document.getElementById('search');
    searchButton.addEventListener( 'click', 
        function () {
          
            var strArr = document.getElementById("string").value;
            var arrSpl = strArr.split(",");

            var art = [];
            for (var i = 0; i < arrSpl.length; i++) {
                art[i] = Number(arrSpl[i]); 
            } 

            try {
                for(var k = 0; k < art.length; k++ ) {
                    if (isNaN(art[k])) 
                        throw new Error('Incorrect data!');
                }
               
                var res = search( art );
            
                var el3 = document.getElementById("result2"); 
                el3.innerHTML = "max = " + res[0] + ",  min = " + res[1] + ", medium = " + res[2];
            }  catch (e) {
                var el3 = document.getElementById("result2"); 
                el3.innerHTML = e.message;
            } 

        }); 

        