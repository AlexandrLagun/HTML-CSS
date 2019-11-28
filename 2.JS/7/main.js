var calculator = new Calculator();
var handler = new Handler();
window.onload = function () {
    var calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener( 'click', 
        function () {
            handler.run(calculator, document)
        });
    document.getElementById('from_cache').style.display = 'none';
}