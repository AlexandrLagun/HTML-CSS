function search(arr) {
    var max=0;
    var min=0;
    var sum  = 0;
   
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > arr[i-1]) {
            max = arr[i];
        }
        if (arr[i] < arr[i-1]) {
            min = arr[i];
        }
        
    }
    var median = sum / arr.length;
    console.log(`max = ${max}, min = ${min},  median = ${median}`);
}

search([1,2,3,-10]);


