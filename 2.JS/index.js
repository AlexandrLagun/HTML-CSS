
//var str = '1+3';
//var arr = str.split('+');

  //console.log(arr );
  //arr = arr.slice(1, arr.length -1);


//console.log(arr);

/*for (var j = 0; j < arr.length; j++) {
  arr[j].slice(1, arr[j].length - 1);
}*/

//console.log(typeof arr[1]);


var str = '"1"+"2"+"3"+"4"';
var arr = [];
if (str.split(" + ") == str) {
  arr = str.split("+");
} else {
  arr = str.split(" + ");
}

for (var i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i].slice(1, arr[i].length - 1));
}
console.log(arr + " " + typeof arr[1]);


var a = 5.32;
var b = a.toFixed(0);
console.log(a == b);

