const express=require('express');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');

//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const router = require('./routes/index');


const app=express();
const port=8000;
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressLayouts);
//extract styles and scripts from subpages to layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.static('./assests'));


//setup of view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router
app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err)
    {
        // console.log('Error',err);//same as down another way of writing
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});
