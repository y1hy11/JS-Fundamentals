function add(a, b) {
    return parseInt(a) + parseInt(b);
}

const args = process.argv.slice(2);
console.log(add(args[0], args[1]));