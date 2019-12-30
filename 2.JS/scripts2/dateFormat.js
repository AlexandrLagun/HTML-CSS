
function createDate(date, formatIn) {
        var dateInput;
        var restr1 = [ /DDMMYYYY/,/DD\.MM\.YYYY/, /DD\-MM\-YYYY/, 
                    /DD\/MM\/YYYY/, /DD\ MM\ YYYY/, /YYYY\.MM\.DD/, 
                    /YYYY\-MM\-DD/, /YYYY\/MM\/DD/, /YYYY\ MM\ DD/,
                    /YYYYMMDD/ ];


        if (restr1[0].test(formatIn) && date.length == 8) {
            var year = date.slice(4,8);
            var month = Number(date.slice(2,4)) -1;
            var dat = date.slice(0,2);
            dateInput = new Date(year, month, dat);
        }

        if (restr1[1].test(formatIn) || restr1[2].test(formatIn) || restr1[3].test(formatIn) || restr1[4].test(formatIn) ) {

            var indArr = [];
            var ind = 0;
            if (formatIn === 'DD.MM.YYYY') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === ".") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } else
            if (formatIn === 'DD-MM-YYYY') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === "-") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } else
            if (formatIn === 'DD/MM/YYYY') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === "/") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } else
            if (formatIn === 'DD MM YYYY') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === " ") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } 

            var year = date.slice(indArr[1] + 1);
            var month = Number(date.slice(indArr[0] + 1, indArr[1])) -1;
            var dat = date.slice(0, indArr[0]);

            dateInput = new Date(year, month, dat);
        }

        if (restr1[5].test(formatIn) || restr1[6].test(formatIn) || restr1[7].test(formatIn) || restr1[8].test(formatIn) ) {
            
            var indArr = [];
            var ind = 0;
            if (formatIn === 'YYYY.MM.DD') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === ".") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } else
            if (formatIn === 'YYYY-MM-DD') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === "-") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } else
            if (formatIn === 'YYYY/MM/DD') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === "/") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            } else
            if (formatIn === 'YYYY MM DD') {
                for (i = 0; i < date.length; i++) {
                    if (date[i] === " ") {
                        indArr[ind] = i;
                        ind++;
                    }
                }
            }
            
            var dat = date.slice(indArr[1] + 1);
            var month = Number(date.slice(indArr[0] + 1, indArr[1])) -1;
            var year = date.slice(0, indArr[0]);

            dateInput = new Date(year, month, dat);
        }

        if (restr1[9].test(formatIn) && date.length == 8 ) {
            var year = date.slice(0,4);
            var month = Number(date.slice(4,6)) -1;
            var dat = date.slice(6,8);
            dateInput = new Date(year, month, dat);
        }

        if (formatIn === 'number') {
            dateInput = new Date(Number(date));
        } 


    if (Number(year < 0)) {
        var el = document.getElementById("error3");
        el.innerHTML = "Negative year!";
    }

    if (Number(year < 1000)) {
        var el = document.getElementById("error3");
        el.innerHTML = "Incorrect year!";
    }

    if (month > 11 || month < 0)  {
        var el = document.getElementById("error3");
        el.innerHTML = "Incorrect month!";
    }

    if (dat > 31 || dat < 1)  {
        var el = document.getElementById("error3");
        el.innerHTML = "Incorrect date!";
    }
    
    return dateInput;




}


//------------------------------------------------------------------------------------------------------------------------------------------

//var d = createDate('40-1-2020', 'DD-MM-YYYY');

//console.log(d);

function fromNow (dateFrom) {
    var d = dateFrom.getDate();
    var m = dateFrom.getMonth();
    var y = dateFrom.getFullYear();
    var t = new Date(); 
    var a = ( t.getFullYear() - y - ((t.getMonth() - --m || t.getDate() - d) < 0) );
    return a;
}


function formatDate(d, formatOut) {


    var result;

    var date = d.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    var month = d.getMonth() +1;
    if (month < 10) {
        month = '0' + month;
    }
    month = "" + month;

    var year = d.getFullYear();             

    if (formatOut !== undefined) {

        var restr = [/DD\ MM\ YYYY/, /DD\ MMM\ YYYY/, /DD\ MMMM\ YYYY/, 
                    /DDMMYYYY/, /DDMMMYYYY/, /DDMMMMYYYY/, 
                    /DD\.MM\.YYYY/, /DD\.MMM\.YYYY/,/DD\.MMMM\.YYYY/,
                    /DD\-MM\-YYYY/, /DD\-MMM\-YYYY/, /DD\-MMMM\-YYYY/,
                    /DD\/MM\/YYYY/, /DD\/MMM\/YYYY/, /DD\/MMMM\/YYYY/
                     ];

        if (restr[0].test(formatOut)) {
            return `${date} ${month} ${year}`;
        }
        if (restr[3].test(formatOut)) {

            return  `${date}${month}${year}`;

        }
        if (restr[6].test(formatOut)) {
            return `${date}.${month}.${year}`;
        }
        if (restr[9].test(formatOut)) {
            return `${date}-${month}-${year}`;
        }
        if (restr[12].test(formatOut)) {
            return `${date}/${month}/${year}`;
        }

        if (restr[1].test(formatOut) || restr[4].test(formatOut) || restr[7].test(formatOut) || restr[10].test(formatOut) || restr[13].test(formatOut)) {
            
            var monthArr = ['Jan','Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug', 'Sep', 
            'Oct', 'Nov', 'Dec'];

            switch(month) {
                case '01': {
                    month = monthArr[0];
                }
                break;
                case '02': {
                    month = monthArr[1];
                }
                break;
                case '03': {
                    month = monthArr[2];
                }
                break;
                case '04': {
                    month = monthArr[3];
                }
                break;
                case '05': {
                    month = monthArr[4];
                }
                break;
                case '06': {
                    month = monthArr[5];
                }
                break;
                case '07': {
                    month = monthArr[6];
                }
                break;
                case '08': {
                    month = monthArr[7];
                }
                break;
                case '09': {
                    month = monthArr[8];
                }
                break;
                case '10': {
                    month = monthArr[9];
                }
                break;
                case '11': {
                    month = monthArr[10];
                }
                break;
                case '12': {
                    month = monthArr[11];
                }
                break;
            }

            if(restr[1].test(formatOut)) {
                return `${date} ${month} ${year}`;
            }
            if(restr[4].test(formatOut)) {
                return `${date}${month}${year}`;
            }
            if(restr[7].test(formatOut)) {
                return `${date}.${month}.${year}`;
            }
            if(restr[10].test(formatOut)) {
                return `${date}-${month}-${year}`;
            }
            if(restr[13].test(formatOut)) {
                return `${date}/${month}/${year}`;
            }

        }


        if (restr[2].test(formatOut) || restr[5].test(formatOut) || restr[8].test(formatOut) || restr[11].test(formatOut) || restr[14].test(formatOut)) {

            var monthArray = ['January','Febrary', 'March', 'April',
            'May', 'June', 'July', 'August', 'September', 
            'October', 'November', 'December'];

            switch(month) {
                case '01': {
                    month = monthArray[0];
                }
                break;
                case '02': {
                    month = monthArray[1];
                }
                break;
                case '03': {
                    month = monthArray[2];
                }
                break;
                case '04': {
                    month = monthArray[3];
                }
                break;
                case '05': {
                    month = monthArray[4];
                }
                break;
                case '06': {
                    month = monthArray[5];
                }
                break;
                case '07': {
                    month = monthArray[6];
                }
                break;
                case '08': {
                    month = monthArray[7];
                }
                break;
                case '09': {
                    month = monthArray[8];
                }
                break;
                case '10': {
                    month = monthArray[9];
                }
                break;
                case '11': {
                    month = monthArray[10];
                }
                break;
                case '12': {
                    month = monthArray[11];
                }
                break;
            }

            if(restr[2].test(formatOut)) {
                return `${date} ${month} ${year}`;
            }
            if(restr[5].test(formatOut)) {
                return `${date}${month}${year}`;
            }
            if(restr[8].test(formatOut)) {
                return `${date}.${month}.${year}`;
            }
            if(restr[11].test(formatOut)) {
                return `${date}-${month}-${year}`;
            }
            if(restr[14].test(formatOut)) {
                return `${date}/${month}/${year}`;
            }

        }
    }
}


//var f = formatDate(d, 'DD-MMMM-YYYY');
//console.log(f);

