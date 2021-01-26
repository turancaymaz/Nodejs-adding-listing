const USer = require('../models/user');
const getAllEkle =async (req,res,next)=>{
    console.log(req.body);
    const {name,soyad,email}=req.body;
    const user = await USer.create({
        name,
        soyad,
        email
    });
    res
    .status(200)
    .json({
        success:true,
        data:user
        
    });
};
module.exports ={
    getAllEkle
};