// Prime numbers based on top

let primos = [];
let top = 30;       // # finish
let i = 2;          // # start

let isPrime = num => {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        
        if (num % i == 0) {
            return false;
        }

    }

    return true;
}

for (i; i < top; i++) {
    if (isPrime(i)) {
        primos.push(i);
    }
}

console.log('%cPrime tester results ->', 'color: #beaac5');
console.log(primos);

// Prime Checker with DOM

let input = document.getElementById('inPrime');
let icon = document.getElementById('iconPrime');

const testPrimeDOM = event => {

    let input = event.target;
    
    isPrime(input.value) 
    ? (icon.innerHTML = "done", icon.style.color = "#ABD89D")
    : (icon.innerHTML = "close", icon.style.color = "#F09797")
}

input.addEventListener('change', testPrimeDOM);