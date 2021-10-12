import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.js';
import cardRoutes from './routes/cardRoute.js';
mongoose.Promise=global.Promise;
mongoose.connect(config.mongo_uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true     
}).then(()=>console.log('Connection successfully to the database!'));
mongoose.connection.on('error',(err)=>{
    throw new Error(`Unable to connect to ${config.mongo_uri}`+err)
})
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/',cardRoutes)
app.listen(config.port,(err)=>{
    if(err){
        console.log(err);
    }
    console.info('Server started on port %s ',config.port);
})