function getSeqMaxSum(arr){
    var sum = 0;
    var max = 0;
    //  Получаем все возможные суммы элементов массива
    for(var i=0;i<arr.length;i++){
        for(var j=i;j < arr.length;j++){
            sum += arr[j];
            // Проверяем максимальная ли сумма в данный момент
            if(sum > max){
                max = sum;
            }
        }
        sum = 0;
    }
    return max;
}
//var re = getSeqMaxSum( arrSpl );
/*var strArr = '-12,1,2,3,-8,4';
var arrSpl = strArr.split(",");

var art = [];
for (var i = 0; i < arrSpl.length; i++) {
    art[i] = Number(arrSpl[i]); 
} 
var re = getSeqMaxSum( art );
console.log(re);*/