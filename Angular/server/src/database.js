const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/CrudDB', { 
    useNewUrlParser: true,
    useUnifiedTopology:true ,
    useFindAndModify:false
})
.then((db)=> console.log('MongoDb baglanıldı'))
.catch((err)=> console.log(err));


