/*  -   Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
    -   If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

    -   For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284.
    -   The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

    -   Evaluate the sum of all the amicable numbers under 10000.
*/

function d(n) {
    let sum = 0;
    for (let j = 1; j < n; j++) {
        if (n % j === 0) {
            sum += j;
        }
    }
    return sum;
}

let sum = 0;
for (let k = 1; k < 10000; k++) {
    let b = d(k);
    if (d(b) === k && b !== k) {
        sum += k;
    }
}

console.log(sum);
