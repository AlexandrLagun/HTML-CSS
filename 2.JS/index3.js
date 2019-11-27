function formatByWord(str) {
    var arr = str.split(' ');
    //console.log(arr);
    strResult = arr.join('\n');
    return strResult;
}
//console.log(formatByWord('Hello world everybody party'));

function formatBySymbol(str) {
    var arr = str.split('');
    //console.log(arr);
    strResult = arr.join('\n');
    return strResult;
}
//console.log(formatBySymbol('Hello word'));

function formatBySentence(str) {
    var re = /[.!?]/;
    var arr = str.split(re);
    strResult = arr.join('\n');
    return strResult;
}
//console.log(formatBySentence('Hello.world!Minsk?Belarus'));


function textHandler(str, maxLength, maxRowCount, formatType) {
    if (maxLength !== undefined && maxLength > 0 && typeof maxLength === 'number') {
        if (str.length > maxLength) console.log('too big length of the string!');
    } 
    
    if (maxRowCount !== undefined && maxRowCount > 0 && typeof maxRowCount === 'number') {
        var lines = str.split('\n').length;
        if(lines > maxRowCount) console.log('too much rows in the string!');
    }
    
    var formatType = arguments[arguments.length-1];
    switch(formatType) {
        case "word": {
           return formatByWord(str);
        }  
        break;
        case "symbol": {
            return formatBySymbol(str);
        }  
        break;
        case "sentence": {
            return formatBySentence(str);
        }  
        break;
        default: return str;
    } 
}
var stringValue = 'hello\ndart\nwaider\nhan\nsolo!';
console.log(textHandler(stringValue, 2, 6, "word"));