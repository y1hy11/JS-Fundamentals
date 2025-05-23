function factorial(n) {
    const num = parseInt(n);
    
    if (isNaN(num)) return 1;    
    if (num <= 0) return 1;
    if (num === 1) return 1;
    
    return num * factorial(num - 1);
}

const number = process.argv[2];
console.log(factorial(number));