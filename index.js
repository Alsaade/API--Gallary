const express = require('express')
const app = express()
const port = 3000
 let gallery =[];
let pageSize = 20;
var fs = require('fs');
app.get('/photos/:page/', (req, res) => {

fs.readFile('./url.txt', 'utf8', (err, contents)=> {
  if(err){
    console.log('Mr. Anas there is an error')
  }else{
    gallery = contents.split('\n')
  }
   
});
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.url.split('/')[2]
    let start = (page-1)*pageSize;
    let end = start + pageSize;

    res.send(gallery.slice(start,end));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 