//console.log(process.argv);
//console.log(process.argv[2]);

let total = 0;

for (let i = 0+2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);
