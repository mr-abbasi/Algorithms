// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz1(n) {
    if (n > 1) {
        fizzBuzz(n - 1);
    }
    const temp = n % 3 === 0 ?
        n % 5 === 0 ? 'fizzbuzz' : 'fizz' :
        n % 5 === 0 ? 'buzz' :
            n;
    console.log(temp);
}

module.exports = fizzBuzz;


function fizzBuzz2(n) {
    for (let i = 1; i <= n; i++) {
        const temp = i % 3 === 0 ?
            i % 5 === 0 ? 'fizzbuzz' : 'fizz' :
            i % 5 === 0 ? 'buzz' :
                i;
        console.log(temp);
    }
}
