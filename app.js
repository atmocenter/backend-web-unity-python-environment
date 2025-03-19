// server/index.js
const path = require('path');
const express = require('express');
const app = express()
const port = process.env.PORT || 3333;
var cors = require('cors')
app.use(cors(
  {
      origin: '*'
  }
))

//the build folder is the folder where the website build files are located
// currently configured that the unity build files are within the build/Build folder
app.use(express.static(path.join(__dirname, 'build')));





app.get('/getdata', (req, res) => {
   res.setHeader('Content-Type','application/octet-stream')
  res.sendFile(path.join(__dirname, 'build', 'Build', 
    //replace the name of the data file here
    'data'));
});
app.get('/getframe', (req, res) => {
  // res.setHeader('Content-Encoding', 'gzip');
  
  res.setHeader('Content-Type', 'text/html')
  res.sendFile(path.join(__dirname, 'build', 'Build', 
    //replace the name of the frame file here
    'framework'));
});
app.get('/getloader', (req, res) => {
  res.setHeader('Content-Type', 'text/html'); 
  res.sendFile(path.join(__dirname, 'build', 'Build', 
    //replace the name of the loader file here
    'loader'));
});

app.get('/getwasm', (req, res) => {
  res.setHeader('Content-Type', 'application/wasm');   
  res.sendFile(path.join(__dirname, 'build', 'Build', 
    //replace the name of the wasm file here
    'wasm'));
});

app.get('/', (req, res) => {
  // res.setHeader('Content-Encoding', 'gzip'); 
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port,()=>{
    console.log("listening ...")
})


 

