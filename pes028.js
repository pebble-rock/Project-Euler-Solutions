/*  -   Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

        21 22 23 24 25
        20  7  8  9 10
        19  6  1  2 11
        18  5  4  3 12
        17 16 15 14 13

    -   It can be verified that the sum of the numbers on the diagonals is 101.

    -   What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/    

let diagonalValue = 1; // This variable will be incremented with each successive value the next diagonal number.
let finalValue = 1001 * 1001; // This is the final diagonal number, clear by inspection.
let diagonalArray = [1]; // We will store each successive diagonal number in this array using the following function.

function diagonalGenerator() {
for (let i = 2; i <= finalValue; i = i + 2) {
    if (diagonalValue === finalValue) {
        return 0;
    }
    for (let j = 1; j <= 4; j++) {
        diagonalValue = diagonalValue + i;
        diagonalArray.push(diagonalValue);
    }

}
}
diagonalGenerator();


let diagonalSum = 0;
for (let k = 0; k < diagonalArray.length; k++) {
    diagonalSum += diagonalArray[k];
}
console.log(diagonalSum);