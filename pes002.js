/*  -   Each new term in the Fibonacci sequence is generated by adding the previous two terms.
    -   By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    -   By considering the terms in the Fibonacci sequence whose values do not exceed four million,
        find the sum of the even-valued terms.
    -   Remark: Most definitions of the Fibonacci numbers start with 0, 1 or 1, 1 as base cases to
        extend the sequence. Our question instead begins with 1, 2.
*/

function fib(n) { 
/*  -   This function determines the nth fibonacci number as implied by the question
    -   The definition is recursive.
*/
    if (n === 1 || n === 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);   
}

function fibSum(m) { 
//  -   This function sums all even fibonacci numbers less than the bound "m".
let sum = 0;
for (let i = 1; fib(i) < m; i++) {
    if (fib(i) % 2 === 0) {
        sum += fib(i);
    }
}
return sum;
}

console.log(fibSum(4000000));
