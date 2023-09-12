import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';
import path from 'path';



const __dirname= path.resolve();


const app=express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/',routes);




app.use(express.static('gmail-clone-amit.netlify.app'));

// app.get('*',function(_, res){
//      res.sendFile(path.join(__dirname + '/client/build/index.html'),function(err){
//         res.status(500).send(err);
//     });
// })
app.get('/', (req, res) => {
    res.send("Hi this is suraj");
})


const PORT=process.env.PORT || 8000;
Connection();

app.listen(PORT,()=>console.log(`server is started on  ${PORT}`));