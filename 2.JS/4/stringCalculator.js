function sum() {
    var sumValue = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumValue += Number(arguments[i]);
    }
    return sumValue;
}
var s = sum('1','2','3','4');
console.log(s);

function mul() {
    var mulValue = 1;
    for (var i = 0; i < arguments.length; i++) {
        mulValue *= Number(arguments[i]);
    }
    return mulValue;
}
//mul('1','2','3','4');

function dif() {
    var difValue = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        difValue -= Number(arguments[i]);
    }
    return difValue;
}
//dif('24','2','3','2');

function div() {
    var divValue = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        divValue /= Number(arguments[i]);
    }
    return divValue;
}
//div('24','2','3','2');

var obj = {
    sum: sum,
    dif: dif,
    mul: mul,
    div: div
}

obj.dif('24', '1.5456', '3.3541');

