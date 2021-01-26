const User = require('../models/user');
const express = require('express');
const {getAllEkle} =require('../controllers/ekle');

const router = express.Router();

router.post("/",getAllEkle);
module.exports=router;