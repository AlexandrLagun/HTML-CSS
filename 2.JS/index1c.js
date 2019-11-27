var arr = [1,1,2,3,4];
function maxIncreaseSeq(arr) {
    var seqArr = [];
    var tmpArr = [];
    for (var i = 0; i < arr.length; i++) {         
        if (arr[i] > arr[i-1]) {
            tmpArr.push(arr[i]);
        } else {
            if (tmpArr.length > seqArr.length) {
                seqArr = tmpArr;
            }
          tmpArr = [arr[i]];
          }
        if (tmpArr.length > seqArr.length) {
          seqArr = tmpArr;
        }
    }
    return seqArr;
}
console.log(maxIncreaseSeq(arr));