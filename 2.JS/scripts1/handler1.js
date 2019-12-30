var obj1 = {
    findMaxSumLow: getMaxSubSumLow,
    findMaxSumFast: getMaxSubSumFast,
    findMaxIncreaseSeq: maxIncreaseSeq,
    search: search
}

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
                var res1 = obj1.findMaxSumFast( art );
                
                var el = document.getElementById("result"); 
                el.innerHTML = res1;
        }   catch (e) {
            var el = document.getElementById("result"); 
            el.innerHTML = e.message;
        } 
     
        try {
            if (strArr === "") {
                throw new Error("Empty string!");
            }
        }   catch(e1) {
            var el = document.getElementById("result"); 
            el.innerHTML = e1.message;
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
               
                var res = obj1.findMaxIncreaseSeq( art );
                
                var el1 = document.getElementById("result1"); 
                el1.innerHTML = res;
            }  catch (e) {
                var el1 = document.getElementById("result1"); 
                el1.innerHTML = e.message;
            } 

            try {
                if (strArr === "") {
                    throw new Error("Empty string!");
                }
            }   catch(e1) {
                var el1 = document.getElementById("result1"); 
                el1.innerHTML = e1.message;
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
               
                var res = obj1.search( art );
            
                var el2 = document.getElementById("result2"); 
                el2.innerHTML = "max = " + res[0] + ",  min = " + res[1] + ", medium = " + res[2];
            }  catch (e) {
                var el2 = document.getElementById("result2"); 
                el2.innerHTML = e.message;
            } 

            try {
                if (strArr === "") {
                    throw new Error("Empty string!");
                }
            }   catch(e1) {
                var el2 = document.getElementById("result2"); 
                el2.innerHTML = e1.message;
            }

        }); 

        