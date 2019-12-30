//  O(n^2) - медленное решение
function getMaxSubSumLow(arr){
    var sum = 0;
    var maxSum = 0;
    //  Получаем все возможные суммы элементов массива
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            sum += arr[j];
            // Проверяем максимальная ли сумма в данный момент
            if(sum > maxSum){
                maxSum = sum;
            }
        }
        sum = 0;
    }
    return maxSum;
}

// O(n) - быстрое решение

function getMaxSubSumFast(arr) {
    let maxSum = 0;
    let partSum = 0;
  
    for (let item of arr) { 
      partSum += item; 
      maxSum = Math.max(maxSum, partSum); 
      if (partSum < 0) partSum = 0; 
    }
  
    return maxSum;
  }