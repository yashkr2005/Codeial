const express=require('express');
const router = require('./routes/index');
const app=express();
const port=8000;

//use express router
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err)
    {
        // console.log('Error',err);//same as down another way of writing
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});