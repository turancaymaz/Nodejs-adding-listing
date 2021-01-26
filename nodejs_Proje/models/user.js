const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type : String,
        required:[true,"Lütfen isim giriniz"]
    },
    soyad:{
        type : String,
        required:[true,"Lütfen Soyisim boş bırakmayınız"]
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Lütfen farklı e-mail hesabı giriniz."],
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Lütfen e-mail Kontrol ediniz."
        ]
    },
    hakkımda:{
        type:String
    },
    meslek:{
        type:String
    }
});
module.exports =mongoose.model("User",UserSchema)