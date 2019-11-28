//функция перевода из двоичной в десятичную
function fromBinToDec(binVector) {
    var bin = convertFromVector(binVector);
    strBin = bin.toString();
    var dec = parseInt(strBin, 2);
    return dec;
}
//console.log(fromBinToDec([1,0,1,1]));

//функция перевода из десятичной в двоичную систему
function fromDecToBin(decVector) {
    var dec = convertFromVector(decVector);
    var bin = dec.toString(2);
    return bin;
}
//console.log(fromDecToBin([4,3])); 

//функция перевода из любой системы счисления в любую
function fromAnyToAny(numVector, systemFrom, systemTo) {
    var num = convertFromVector(numVector);
    // представим это число в десятичном виде 
    var strNum = num.toString();
    var dec = parseInt(strNum, systemFrom);
    // переведем из десятичной системы в требуемую
    var result = dec.toString(systemTo);
    return result;
}
//console.log(fromAnyToAny([1,0,1,1], 2, 10));

function convertFromVector(string) {
    var vector = string.split(",");
    var str = "";
    var ch = "";
    for(var i = vector.length -1; i >= 0; i--) {
    //создаем число в виде строки
       ch = vector[i].toString(); 
       str += ch; 
    }
    var num = Number(str);
    return num;
    
}
//console.log(convertFromVector([1,2,3]));

var objConvert = {
    binToDec: fromBinToDec,
    decToDec: fromDecToBin,
    anyToAny: fromAnyToAny
}

//console.log(objConvert.anyToAny([2,1], 10, 2));