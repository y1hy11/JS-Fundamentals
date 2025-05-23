const x = Math.floor(Number(process.argv[2]));

if (isNaN(x)) {
    console.log('Missing size');
} else if (x > 0) {
    for (let i = 0; i < x; i++) {
        console.log('X'.repeat(x));
    }
}