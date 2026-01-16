// "D:\Backend_dev_bridgelabz\path.js"
// path.join("user", "Jai", "gitbash"); // safe, clean code, cross-platform


// const path = require('path');
// const filePath ="D:\Backend_dev_bridgelabz\path.js";
// console.log(path.basename(filePath));


const path =require('path');
console.log("File Name", path.basename(__filename));
console.log("Folder Name", path.dirname(__filename));
console.log("Extension", path.extname(__filename));

const fullPath=path.join(__dirname, "public", "index.html");
console.log("Full Path", fullPath);