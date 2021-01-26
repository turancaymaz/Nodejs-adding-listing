const express = require("express");
const dotenv = require("dotenv");
const ekle = require("./routers/ekle");
const listele =require("./routers/listele");
const connectDatabase = require("./helpers/database/connectDatabase");


dotenv.config({
    path:"./config/env/config.env"
});

connectDatabase();


const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/ekle",ekle);
app.use("/api/listele",listele);



app.listen(PORT,()=>{
    console.log(`Uygulamma Çalıştı ${PORT} : ${process.env.NODE_ENV}`);

});
