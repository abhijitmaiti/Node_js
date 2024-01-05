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


// const dataSet = require('./data.js');
// const http = require('http');
// http.createServer((req,rep)=>{
//     rep.writeHead(200,{'content-type':'application/Json'});
//     rep.write(JSON.stringify(dataSet));
//     rep.end();

// }).listen(3000);

// console.log(process.argv[2]);

// <------input from command------->

//   const fs=require('fs');
//   const input=process.argv;
//   if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
//   }
//   else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
//   }
//   else{
//     console.warn("Wrong input");
//   }

// <------------show file list------------->

// const fs=require('fs');
// const path=require('path');
// const dirName=path.join(__dirname,'files');
// console.log(dirName);
// // for(i=0;i<5;i++){
// //     fs.writeFileSync(dirName+"/Date"+(i+1)+".txt","This is demo of multiple file");

// // }
// // console.log("file created .........");

// fs.readdir(dirName,(error,item)=>{
//   item.forEach((i)=>{
//     console.log(i);
//   })
// });

// <------------CRUD with file system --------- ---->


// const { error } = require('console');
// const fs=require('fs');
// const path=require('path');
// const dirName=path.join(__dirname,'dataset');
// const filePath=`${dirName}/data1.txt`;

// <--------Make file--------->
// fs.writeFileSync(filePath,"This is my CRUD file opertaion ",(error)=>{
//     if(!error){
//         console.log("Text inserted.....");
//     }
// });

// <---------read file----------------->
// fs.readFile(filePath,'utf8',(error,items)=>{
//     console.log(items);

// })
// <---------update file-------------->
// fs.appendFile(filePath,"This is the apped text in CRUD opertion",(error)=>{
//     if(!error){
//         console.warn("Append done.....");
//     }
//     else{
//         console.warn("Not append.....");
//     }
// })
// <---------rename file ------------>
// fs.rename(filePath,`${dirName}/data2.txt`,(error)=>{
//     if(!error){
//     console.warn("Rename done.....")}

// })
// <--------delect file-------------->
//  fs.unlinkSync(filePath);


// <------Asynchronus and synchronus---------->

// console.log("start.exe");
// setTimeout(()=>{
//     console.log("logic.exe");
// }, 200)
// console.log("complete.exe");

// let a=10;
// let b=10;
// setTimeout(()=>{
//     b=20;
// },200)
// console.log(a+b);

// <---------promise----------> 

// let a=10;
// let b=0;
// let waitingData=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30);

//     },200)
// })
// waitingData.then((data)=>{
//     console.log(a+data);
// })

 const { promises } = require('dns');
 const fs=require('fs');
 const http=require('http');
 const path=require('path');
 const weatherData=require('./weather_data.js');
 const dirPath=path.join(__dirname,"dataset");
 const input=process.argv;
 const filePath=`${dirPath}/${input[2]}`;
 if(input[3]=="write"){
    fs.writeFileSync(filePath,"This is my pratice file",(error)=>{
        if(!error){
            console.warn(`writing is done in ${input[2]}`)
        }
    });
}   

 else if (input[3]=="append"){
    let waitingData=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let text="This is append opertion in the existing file";
            resolve(text);
        },200)
     })
     waitingData.then((item)=>{
        fs.appendFile(filePath,item,(error)=>{
            if(!error){
                console.log("Text apending is done....");
            }
        })
     })
 }else if(input[3]=="rename"){
    fs.rename(filePath,`${dirPath}/{input[4]}`,(err)=>{
        if(err)throw err;
        console.warn(`${input[2]} to ----->${input[4]}`);
    })
 }
 else if(input[3]=="delete"){
    fs.unlinkSync(filePath,(error)=>{
        console.warn("file link is done .......");
    });
 }
 else if(input[3]=="readfile"){
    fs.readFile(filePath,'utf-8',(error,item)=>{
        console.log(item);
    })
   
 }
 else if(input[3]=="presentFiles"){
    fs.readdir(dirPath,(error,item)=>{
        item.forEach((index)=>{
            console.log(index);
        })
    })
 }
 else if(input[2]=="createServer"){
    http.createServer((request,response)=>{
        response.writeHead(200,{'content-type':'application.Json'},);
        response.write(JSON.stringify(weatherData));
        response.end();
    }).listen(2000);
 }
 
 
