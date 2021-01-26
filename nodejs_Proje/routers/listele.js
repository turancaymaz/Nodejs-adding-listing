const User = require('../models/user');
const express = require('express');
const{getAllListele}=require('../controllers/listele');

const router = express.Router();
router.get("/",getAllListele);

//router.get("/",getAllListele);

module.exports=router;