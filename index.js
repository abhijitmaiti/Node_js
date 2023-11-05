// const http = require('http');
// const data= require('./data.js');
// const { json } = require('stream/consumers');
// http.createServer((req, rep) => {
//     rep.writeHead(200,{'content-type':'application/json'});
//     rep.write(JSON.stringify(data));
//     rep.end();

// }).listen(8080);


// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else
//     console.log("Invalid output");


const dataSet = require('./data.js');
const http = require('http');
http.createServer((req,rep)=>{
    rep.writeHead(200,{'content-type':'application/Json'});
    rep.write(JSON.stringify(dataSet));
    rep.end();

}).listen(3000);

