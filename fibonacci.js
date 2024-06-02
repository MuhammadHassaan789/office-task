var prompt = require('prompt-sync')();

(function() {
    let userInputStart = prompt("Enter any Number: ")
    let numberOne = parseInt(userInputStart)
    let userInputStop = prompt("Enter any Number: ")
    let numberTwo = parseInt(userInputStop)

    function fibonacciSeries(start, stop) {
        let fib = [0, 1];
        for (let i = 2; fib[i - 1] <= stop; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib.slice(fib.findIndex(x => x >= start), fib.findIndex(x => x > stop));
    }
    let series = fibonacciSeries(numberOne, numberTwo);
    console.log('Fibonacci Series: ' , series)
})();