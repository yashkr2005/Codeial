const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controllers');

router.get('/',homeController.home);
router.use('/users',require('./users'));

// for any other route 
// router.use('/routename',require('./routefilename'));

module.exports=router;