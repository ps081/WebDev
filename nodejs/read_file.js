const fs = require("fs")
// const { program } = require('commander');

// program
//   .option('--first')
//   .option('-s, --separator <char>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));

function main(fileName){
  fs.readFile(fileName, "utf-8", (err, data)=>{
    let total = 0;
    for (let i = 0; i<data.length; i++){
      // console.log(data[i])
      if(data[i] === " "){
        total++;
      }
    }
    console.log(total);
  })
}
main("a.txt")