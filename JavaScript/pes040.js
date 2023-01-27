/*  -   An irrational decimal fraction is created by concatenating the positive integers:

        0.123456789101112131415161718192021...

    -   It can be seen that the 12th digit of the fractional part is 1.

    -   If dn represents the nth digit of the fractional part, find the value of the following expression:

        d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000.
*/

let fractionalPart = ".";

//By trial and error we deduce that 200000 is a sufficient bound for yielding an answer.
for (let i = 1; i < 200000; i++) {
    fractionalPart += i.toString();
}

console.log(fractionalPart[1] * fractionalPart[10] * fractionalPart[100] * fractionalPart[1000] * fractionalPart[10000] * fractionalPart[100000] * fractionalPart[1000000]);