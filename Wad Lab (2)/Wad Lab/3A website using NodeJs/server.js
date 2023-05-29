const express = require('express');
const app = express();

app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



app.get('/',(req,res)=>{
    // res.sendFile('./nav.html', {root: __dirname})
    res.sendFile('./public/home.html', {root: __dirname}) ;
}) ;

 app.get('/about',(req,res)=>{
     res.sendFile('./public/about.html', {root: __dirname}) ;

 }) ;

app.get('/contact',(req,res)=>{
    res.sendFile('./public/contact.html', {root: __dirname}) ;

}) ;
