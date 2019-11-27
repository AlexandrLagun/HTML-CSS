function createDate(date, formatIn) {
    if (formatIn !== undefined) {

        var restr = [ /DDMMYYYY/,/DD\.MM\.YYYY/, /DD\-MM\-YYYY/, 
                    /DD\/MM\/YYYY/, /DD\ MM\ YYYY/, /YYYY\.MM\.DD/, 
                    /YYYY\-MM\-DD/, /YYYY\/MM\/DD/, /YYYY\ MM\ DD/,
                    /YYYYMMDD/ ];


        if (restr[0].test(formatIn)) {
            var year = date.slice(4,8);
            var month = Number(date.slice(2,4)) -1;
            var date = date.slice(0,2);
            return new Date(year, month, date);
        }

        if (restr[1].test(formatIn) || restr[2].test(formatIn) || restr[3].test(formatIn) || restr[4].test(formatIn) )
        {
            var year = date.slice(6,10);
            var month = Number(date.slice(3,5)) -1;
            var date = date.slice(0,2);
            return new Date(year, month, date);
        }

        if (restr[5].test(formatIn) || restr[6].test(formatIn) || restr[7].test(formatIn) || restr[8].test(formatIn) )
        {
            var year = date.slice(0,4);
            var month = Number(date.slice(5,7)) -1;
            var date = date.slice(8,10);
            return new Date(year, month, date);
        }

        if (restr[9].test(formatIn)  )
        {
            var year = date.slice(0,4);
            var month = Number(date.slice(4,6)) -1;
            var date = date.slice(6,8);
            return new Date(year, month, date);
        }

    }

    if (typeof date == 'number') {
        return new Date(date);
    }

    var date = date.slice(0,2);
    var month =  Number(date.slice(2,4)) -1;
    var year = date.slice(4,8);
    return  new Date(year, month, date, 15, 30);
}


var d = createDate('02.01.2019', 'DD.MM.YYYY');
console.log(d);



function formatDate(d, formatOut) {

    var monthArr = ['January','Febrary', 'March', 'April',
                 'May', 'June', 'July', 'August', 'September', 
                 'October', 'November', 'December'];

    var date = d.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    var month = d.getMonth() +1;
    if (month < 10) {
        month = '0' + month;
    }
    var year = d.getFullYear();             

    if (formatOut !== undefined) {

        var restr = [/DD\ MM\ YYYY/, /DD\ MMM\ YYYY/, /DD\ MMMM\ YYYY/, 
                    /DDMMYYYY/, /DDMMMYYYY/, /DDMMMMYYYY/, 
                    /DD\.MM\.YYYY/, /DD\.MMM\.YYYY/,/DD\.MMMM\.YYYY/,
                    /DD\-MM\-YYYY/, /DD\-MMM\-YYYY/, /DD\-MMMM\-YYYY/,
                    /DD\/MM\/YYYY/, /DD\/MMM\/YYYY/, /DD\/MMMM\/YYYY/
                     ];

        if (restr[0])



       /* var restr = [/DDMMYYYY/,/DD\.MM\.YYYY/, /DD\-MM\-YYYY/, 
            /DD\/MM\/YYYY/, /DD\ MM\ YYYY/, /YYYY\.MM\.DD/, 
            /YYYY\-MM\-DD/, /YYYY\/MM\/DD/, /YYYY\ MM\ DD/, /YYYYMMDD/
            ];

        */    

    }


    
    return `${date}-${month}-${year}`;

}

var f = formatDate(d);
console.log(f);



/* var re = /([0-2][1-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})/;
var re1 = /([0-2][1-9]|3[01])\-(0[1-9]|1[0-2])\-(\d{4})/;
var re2 = /([0-2][1-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})/; */

