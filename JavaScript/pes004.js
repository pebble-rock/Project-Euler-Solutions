/*  -   A palindromic number reads the same both ways.
    -   The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    -   Find the largest palindrome made from the product of two 3-digit numbers.
*/

function palindromeCheck(n) {
    let numberString = n.toString();
    let stringLength = numberString.length;
    for (let k = 0; k <= Math.floor(stringLength / 2); k++) {
        if (numberString[k] != numberString[stringLength - 1 - k]) {
            return false
        }
    }
    return true;
}

function largestPalindromeProduct() {
    let largestNumber = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            if (palindromeCheck(i * j) === true && i * j > largestNumber) {
                largestNumber = i * j;
            }
        }
    }
    return largestNumber;
}

console.log(largestPalindromeProduct());