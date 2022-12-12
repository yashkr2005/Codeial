const express=require('express');
const router = require('./routes/index');
const app=express();
const port=8000;

const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
//extract styles and scripts from subpages to layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.static('./assests'));
//use express router
app.use('/',require('./routes/index'));

//setup of view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err)
    {
        // console.log('Error',err);//same as down another way of writing
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});