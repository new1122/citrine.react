import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
const app = express();
import userRoute from './user.route.js';
import cors from 'cors';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(cors());


// app.get('/', function(req,res){
//     res.sendFile(__dirname+'/abc.html');
// })

//connect to mongodb
const URI = 'mongodb://localhost:27017/reactjs'
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to MongoDB")
}
catch(error){
    console.log(error);
}


app.use('/user', userRoute);

// app.post('/', function(req,res){
//     var name = req.body.name;
//     var number = req.body.number;
       
//     var sql = "INSERT INTO loginuser(user_name,user_mob) VALUES(?,?)";
//     connection.query(sql,[name, number] , function(error, result){
//         console.log("data inserted");
//     })
// })

app.listen(8080);