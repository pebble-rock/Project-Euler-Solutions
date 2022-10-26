/*  -   A Pythagorean triplet is a set of three natural numbers, a < b < c, for which a ^ 2 + b ^ 2 = c ^ 2
    -   For example, 3 ^ 2 + 4 ^ 2 = 9 + 16 = 25 = 5 ^ 2.

    -   There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    -   Find the product abc.
*/

/*  -   All Pythagorean triples can be given by the formula r * (2 * m * n, m ^ 2 - n ^ 2, m ^ 2 + n ^ 2) where
        1) r >= 1 is any natural number.
        2) m , n are natural numbers with opposing parity satisfying (m , n) = 1 with m > n.
    -   Our approach below uses brute force and doesn't build in logic checking (m , n) = 1 or m, n parity.
*/


for (let r = 1; r < 500; r++ ) {
    for (let i = 2; i < 1000; i++) {
/*  -   There is nothing special about the bounds chosen for r and i, we just need them to be large enough to
    -   to allow the algorthim to run and find a solution.
*/
        for (let j = 1; j < i ; j++) {
            let a = r * (2 * i * j);
            let b = r * (i ** 2 - j ** 2);
            let c = r * (i ** 2 + j ** 2);
            if (a + b + c === 1000 && a ** 2 + b ** 2 === c ** 2) {
                return (console.log(a , b , c));
            }
        }
    }
}


