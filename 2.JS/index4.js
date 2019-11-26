function sum() {
    var sumValue = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumValue += Number(arguments[i]);
    }
    console.log(sumValue.toFixed(2));
}
//sum('1','2','3','4');

function mul() {
    var mulValue = 1;
    for (var i = 0; i < arguments.length; i++) {
        mulValue *= Number(arguments[i]);
    }
    console.log(mulValue.toFixed(2));
}
//mul('1','2','3','4');

function dif() {
    var difValue = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        difValue -= Number(arguments[i]);
    }
    console.log(difValue.toFixed(2));
}
//dif('24','2','3','2');

function div() {
    var divValue = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        divValue /= Number(arguments[i]);
    }
    console.log(divValue.toFixed(2));
}
//div('24','2','3','2');

var obj = {
    sum: sum,
    dif: dif,
    mul: mul,
    div: div
}

obj.sum('24', '1.5456', '3.3541');

