var sortButton = document.getElementById('sort');
    sortButton.addEventListener( 'click', 
        function () {
            var str  = document.getElementById('array').value;
            var sortType  = document.getElementById('sort_type').value;
            var arr = str.split(",");
            document.getElementById('result_type_sort').innerHTML = "";
            document.getElementById('result_array').innerHTML = "";
            arr = arr.map( item => Number(item));
            try {
                for(var k = 0; k < arr.length; k++ ) {
                    if (isNaN(arr[k])) 
                        throw new Error('Incorrect array!');
                }
                var result = "";
                var type = "";
                switch(sortType) {
                    case "bubble": {
                        result = obj5.bubbleSort(arr);
                        type = "bubble sort";
                    }
                    break;
                    case "quicksort": {
                        result = obj5.quickSort(arr, 0, arr.length - 1);
                        type = "quick sort";
                    }
                    break;
                    case "selectsort": {
                        result = obj5.selectionSort(arr);
                        type = "selection sort";
                    }
                    break;
                    case "insertsort": {
                        result = obj5.insertionSort(arr);
                        type = "insertion sort"; 
                    }
                    break;
                } 
            if (str === "") {
                document.getElementById('result_type_sort').innerHTML = `Empty string, enter an array`;
            }   else {
            document.getElementById('result_type_sort').innerHTML = `Sorted by ${type}`;
            document.getElementById('result_array').innerHTML = result; 
            }
        }  catch (e) {
            var el1 = document.getElementById("result_array"); 
            el1.innerHTML = e.message;
        } 

        });