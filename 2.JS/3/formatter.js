function formatByWord(str) {
    var arr = str.split(' ');
    console.log(arr);
    strResult = arr.join('<br/>');
    return strResult;
}
//console.log(formatByWord('Hello world everybody party'));

function formatBySymbol(str) {
    var arr = str.split('');
    //console.log(arr);
    strResult = arr.join('<br/>');
    return strResult;
}
//console.log(formatBySymbol('Hello word'));

function formatBySentence(str) {
    var re = /[.!?]/;
    var arr = str.split(re);
    strResult = arr.join('<br/>');
    return strResult;
}
//console.log(formatBySentence('Hello.world!Minsk?Belarus'));


function textHandler(str, maxLength, maxRowCount, formatType) {
    
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
