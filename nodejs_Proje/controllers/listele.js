const USer = require('../models/user');
const liste=(req,res,next)=>{
    res
    .status(200)
    .json({
        success:true
    });

};
const getAllListele =(async (req,res,next)=>{
    const user =await USer.find();
    return res
    .status(200)
    .json({
        success:true,
        data:user

    });
    
    });
module.exports={
    liste,
    getAllListele
};