function bubbleSort(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j<arr.length; j++){
            if (arr[j]>arr[j+1]) {
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1,3,4,2,8,5]));