/*  -   The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
    -   Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/


let sum = 0n;
for (let i = 1n; i <= 1000n; i++) {
    sum += (i ** i);
}


let sumString = sum.toString();
let digits = Number(sumString.substring(sumString.length - 10 , sumString.length));
console.log(digits);