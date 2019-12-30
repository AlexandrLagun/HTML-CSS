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
//console.log(bubbleSort([1,4,3,2,7,6,12]));

// quicksort  

function swap(arr, leftIndex, rightIndex){
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}
function partition(arr, left, right) {
    var pivot  = arr[Math.floor((right + left) / 2)], 
        i  = left, 
        j  = right; 
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

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right); 
        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) { 
            quickSort(arr, index, right);
        }
    }
    return arr;
}
var arr = [1,3,2,7,6,5,18];
var rs = quickSort( arr, 0, arr.length - 1,);
//console.log(rs);

// selection sort 


  function selectionSort(arr){
  
    for (var i = 0; i < arr.length; i++){ 
      var min = i; 
      for (var j = i + 1; j < arr.length; j++){ 
        if (arr[j] < arr[min]) {min = j}; 
      }
        if ( min != i) {
        var tmp = arr[i]; arr[i] = arr[min]; arr[min] = tmp; 
      }
    }
    return arr;
  };

   //console.log(selectionSort([1,5,2,3,-5,0,12,20]));

 

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
  //console.log(insertionSort([1,2,12,5,4,9,8,7]));

  var obj5 = {
    bubbleSort: bubbleSort,
    quickSort: quickSort,
    selectionSort: selectionSort,
    insertionSort: insertionSort
  };