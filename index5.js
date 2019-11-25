// bubblesort

function bubbleSort(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp; 
            }
        }
    }
    return arr;
}
//console.log(bubbleSort([1,3,5,7,2,3,4,15,9]));

// quicksort  

function quickSort(arr, left, right) {

    function swap(arr, firstInd, secondInd){

        const temp = arr[firstInd];
        arr[firstInd] = arr[secondInd];
        arr[secondInd] = temp;
    }
    
    function partition(arr, left, right) {

        var pivot   = arr[(right + left) / 2],
            i = left,
            j = right;
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    
    if (arr.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? arr.length - 1 : right;
        var index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
//var result = quickSort([1,3,4,2,10,8,7,9]);


// selection sort (1 way)
/*

  function selectionSort(arr){
  
    for (var i = 0; i < arr.length; i++){ 
      var min = i; 
      for (var j = i + 1; j < arr.length; j++){ 
        if (arr[j] < arr[min]) min = j; 
        var tmp = arr[i]; arr[i] = arr[min]; arr[min] = tmp; 
      }
    }
    return arr;
  };

*/
  //console.log(selectionSort([1,2,3,8,4,7,6,2]));

 

  // insertion sort

  function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i], prevInd = i-1;
        while(prevInd >= 0 && arr[prevInd] > value) {
            arr[prevInd+1] = arr[prevInd];
            prevInd--;
        }
            arr[prevInd+1] = value;
    }
       return arr;
  }
  console.log(insertionSort([1,2,5,4,9,8,7]));