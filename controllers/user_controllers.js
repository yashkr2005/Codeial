const User=require('../models/users');
module.exports.profile=function(req,res)
{
    return res.render('user_profile',
    {
        title:"Home"
    });
}
//rendering signup page
module.exports.signUp=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',
    {
          title:"Codeial | Signup"
    });
}
//rendering signin page
module.exports.signIn=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',
    {
          title:"Codeial | Signin"
    });
}
//get sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password)
    {
        // alert('Password and confirm password doesnot matches');
        return res.redirect('back'); 
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err)
        {
            console.log('error in finding user into db');
            return;
        }
        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user account');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }
        else
        {
            // alert('User already registered');
            return res.redirect('back');
        }
    })
}
//sign in and create session
module.exports.createSession=function(req,res){
    return res.redirect('/');
}

module.exports.destroySession=function(req, res, next) 
{
    req.logout(function(err) {
      if (err)  return next(err); 
      return res.redirect('/');
    });
}
