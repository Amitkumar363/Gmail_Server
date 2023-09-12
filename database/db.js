
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const Connection =()=>{

    const DB_URL=`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-bb0a7lk-shard-00-00.ycylfrs.mongodb.net:27017,ac-bb0a7lk-shard-00-01.ycylfrs.mongodb.net:27017,ac-bb0a7lk-shard-00-02.ycylfrs.mongodb.net:27017/?ssl=true&replicaSet=atlas-uwa6mm-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        
         mongoose.connect(DB_URL,{useNewUrlParser:true})
         console.log('database connected')
    }
    catch(error){
        console.error('Error while connecting', error.message);
    }
}

export default Connection;