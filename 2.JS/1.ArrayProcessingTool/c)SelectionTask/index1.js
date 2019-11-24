function getMaxSubSum(arr){
            var sum = 0;
            var max = 0;
            //  получаем все возможные суммы.
            for(var i=0;i<arr.length;i++){
                for(var p=i;p < arr.length;p++){
                    sum += arr[p];
                    // Проверяем максимальную сумму в данный проход цикла.
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
        console.log(getMaxSubSum( [-1,1,2,3,4,5,-15,-39] ));
       