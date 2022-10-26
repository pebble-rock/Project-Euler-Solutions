/*  -   The sum of the squares of the first ten natural numbers (excluding 0 in sequence) is 385.
    -   The square of the sum of the first ten natural numbers is 3025.
    -   Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640.
    -   Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

/*  -   It can be shown by induction that the sum 1 + 2 + ... + n = n(n + 1)/2 for all natural numbers n.
    -   Similarly by induction we have 1^2 + 2^2 + ... + n^2 = (2n + 1)(n + 1)/6 for all natural numbers n.
    -   We use these equations in our solution.
*/

function sumOfSquares(n) {
    return n * ((2 * n) + 1) * (n + 1) / 6;
}
function squareOfSum(m) {
    return (m * (m + 1) / 2) ** 2;
}
console.log(squareOfSum(100) - sumOfSquares(100));