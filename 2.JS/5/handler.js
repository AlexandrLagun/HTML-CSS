var sortButton = document.getElementById('sort');
    sortButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('array').value;
            var sortType  = document.getElementById('sort_type').value;
            var arr = str.split(",");
            
            for (var i = 0; i < arr.length; i++) {
                arr[i] = parseInt(arr[i], 10);
            }
            var result = "";
            var type = "";
            switch(sortType) {
                case "bubble": {
                    result = bubbleSort(arr);
                    type = "bubble sort";
                }
                break;
                case "quicksort": {
                    result = quickSort(arr, 0, arr.length - 1);
                    type = "quick sort";
                }
                break;
                case "selectsort": {
                    result = selectionSort(arr);
                    type = "selection sort";
                }
                break;
                case "insertsort": {
                    result = insertionSort(arr);
                    type = "insertion sort";
                    
                }
                break;
            } 
           
        document.getElementById('result_type_sort').innerHTML = `Sorted by ${type}`;
        document.getElementById('result_array').innerHTML = result;
        
        });