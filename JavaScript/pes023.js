/*  -   A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
        For example, 28 is a perfect number since it is the sum of it's proper divisors 1 + 2 + 4 + 7 + 14 = 28.

    -   A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant
        if this sum exceeds n.

    -   As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as
        the sum of two abundant numbers is 24.

    -   By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum
        of two abundant numbers.

    -   However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest
        number that cannot be expressed as the sum of two abundant numbers is less than this limit.

    -   Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/


function abundant(n) {
    let sum = 0;
    for (let j = 1; j < n; j++) {
        if (n % j === 0) {
            sum += j;
        }
    }
    if (sum > n) {
        return true;
    }
    return false;
}

let abundantArray = [];
for (let i = 1; i <= 28123; i++) {
    if (abundant(i)) {
        abundantArray.push(i);
    }
}
// console.log(abundantArray);



let integers = [];
for (let j = 1; j <= 28123; j++) {
    integers.push(j);
}
//console.log(integers);


let abundantSums = [];
for (k = 0; k < abundantArray.length; k++) {
    for (l = 0; l < abundantArray.length; l++) {
        if (abundantArray[k] + abundantArray[l] <= 28123) {
        abundantSums.push(abundantArray[k] + abundantArray[l]);
    }
}
}
let abundantSumsSet = new Set(abundantSums);



let setDifference = (new Set([...integers].filter(x => !abundantSumsSet.has(x))));
let setDifferenceArray = Array.from(setDifference);
// console.log(setDifferenceArray);

// let filteredArray = integers.filter(x => !abundantSums.includes(x));
// console.log(filteredArray);

let finalSum = 0
for (let m = 0; m < setDifferenceArray.length; m++) {
    finalSum += setDifferenceArray[m];
}
console.log(finalSum);