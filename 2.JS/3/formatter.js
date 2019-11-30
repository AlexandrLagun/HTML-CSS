function formatByWord(str) {
    var arr = str.split(' ');
<<<<<<< HEAD
    console.log(arr);
    strResult = arr.join('<br/>');
=======
    //console.log(arr);
    strResult = arr.join('\n');
>>>>>>> 1baec9aaf5e91a957353acc59d73c57b58afaa7a
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
    
<<<<<<< HEAD
=======
   
    
>>>>>>> 1baec9aaf5e91a957353acc59d73c57b58afaa7a
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
<<<<<<< HEAD
=======
//hello dart waider han solo!
var stringValue = 'rdeytr';
console.log(textHandler('rdeytr', 2, 6, "symbol"));
>>>>>>> 1baec9aaf5e91a957353acc59d73c57b58afaa7a
