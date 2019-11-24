function getSeqMaxSum(arr){
            var sum = 0;
            var max = 0;
            //  Получаем все возможные суммы элементов массива
            for(var i=0;i<arr.length;i++){
                for(var j=i;j < arr.length;j++){
                    sum += arr[j];
                    // Проверяем максимальная ли сумма в данный момент
                    if(sum < 0){
                        continue;
                    }else if(sum > max){
                        max = sum;
                    }
                }
                sum = 0;
            }
            return (max > 0)? max: -1;
        }
        console.log(getSeqMaxSum( [1,2,3,-15,1,4,8] ));
       