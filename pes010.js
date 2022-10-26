// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.



function checkPrime(n) {
// This functions checks if there any factors of n below sqrt(n) to determine if n is prime or not. 
    if (n === 2) {
        return true;
    }
    for (let i = 2; i*i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let sum = 0;
for (let j = 2; j < 2000000; j++) {
    if (checkPrime(j)) {
        sum += j
    }
}
console.log(sum);