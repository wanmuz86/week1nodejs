var fs = require('fs');

console.log("Begin Reading File");
fs.readFile('input.txt', function(err,data){
	if (err) return err;
	console.log(data.toString());
})
console.log("Program Ended!"); 