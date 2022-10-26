/*  -   n! means n × (n − 1) × ... × 3 × 2 × 1

    -   For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
        and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

    -   Find the sum of the digits in the number 100!
*/  

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1n;
    }
    return BigInt(n) * factorial(n - 1);
}

let ourFactorial = factorial(100).toString();
let sum = 0;
for (let i = 0; i < ourFactorial.length; i++) {
    sum += Number(ourFactorial[i]);
}
console.log(sum);