/*  -   The prime factors of 13195 are 5, 7, 13 and 29.
    -   What is the largest prime factor of the number 600851475143 ?
*/


//Not done


//Produce an array of all primes below the sqrt(600851475143) bound.
//



let factorsArray = [];

// function 

function largestPrimeFactor(n) {
    
    for (let i = Math.floor(Math.sqrt(n)); i >= 2; i--) {
        if (n % i === 0) {
            factorsArray.push(i);
        }
    }
}

largestPrimeFactor(600851475143);
console.log(factorsArray);

// function factorPrimeCheck(m) {
// let possiblePrimeArray = [];

// function factorsOfFactor { (let i = Math.floor(Math.sqrt(n)); i >= 2; i--)

//     for (let j = 0; j < factorsArray.length; j++) {
//         if (factorsArray[j] === )

//     }
// }


// }

// console.log(largestPrimeFactor(600851475143));
// console.log(largestPrimeFactor(486847));


function checkPrime(n) {
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




// function largestPrime(m) {
//     for (let j = m; j > 1; j--) {
//     if (m % j === 0 && checkPrime(j) === true){
//         return j;
//     }
// }
// }


console.log(largestPrime(600851475143));
// console.log(checkPrime(2));
// console.log(checkPrime(3));
// console.log(checkPrime(4));
// console.log(checkPrime(11));
// console.log(checkPrime(20));
// console.log(checkPrime(73));
// console.log(checkPrime(97));
// console.log(checkPrime(150));
