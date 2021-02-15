const { Schema, model} = require('mongoose');

const studentSchema = new Schema({
    ad:{type:String},
    soyad:{type:String},
    telefon:{type:Number},
    email:{type:String},
    hakkinda:{type:String}

},{
     timestamps:true,
     versionKey: false,
})

module.exports = model("Student",studentSchema);