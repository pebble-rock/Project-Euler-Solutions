// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

let bigNumber = BigInt(2 ** 1000).toString();
console.log(bigNumber);
let sum = 0;
for (let i = 0; i < bigNumber.length; i++) {
    sum += Number(bigNumber[i]);
}
console.log(sum);