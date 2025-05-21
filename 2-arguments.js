const myVar = process.argv.slice(2);

if (myVar.length === 0) {
  console.log('No argument');
} else {
  console.log('Arguments found');
}