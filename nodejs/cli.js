const fs = require("fs")
const { program } = require('commander');
const program = new Command();

program
  .name('File related cli')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_words')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file)=>{
    fs.readFile(file, 'utf-8', (err, data)=>{
      if(err){
        console.log(err);
      } else{
        // const lines = data.split('\n').length;
        // console.log(`There are ${lines} lines in ${file}`)
        let words = 0
        for(let i = 0; i<data.length; i++){
          if(data[i]===" "){
            words++;
          }
        }
        console.log(`There are ${words + 1} lines in ${file}`)
      }
    })
  })

program.command('count_sentences')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file)=>{
    fs.readFile(file, 'utf-8', (err, data)=>{
      if(err){
        console.log(err)
      } else{
        let words = 0
        for(let i = 0; i<data.length; i++){
          if(data[i]===" "){
            words++;
          }
        }
        console.log(`There are ${words + 1} lines in ${file}`)
      }
    })
  })