const myVar = process.argv.slice(2);

if (!myVar[0]) {
    console.log("No argument");
} else {
    console.log(myVar.join(" "));
}