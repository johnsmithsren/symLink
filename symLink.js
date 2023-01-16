const fs = require('fs');
let src = __dirname + "\\js"
let dest = __dirname + "\\egg\\js"
fs.symlinkSync(src, dest, 'dir')
console.log("\nSymlink created\n");
