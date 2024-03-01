import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";

const app = express();


dotenv.config({path: "./.env"})
const db = process.env.DB

mongoose.connect(db).then(()=>{
    console.log(`connection successfull`);
}).catch((err)=> console.log(`no connection`));

//MIDDLEWARE
const middleware = (req,res,next) =>{
    console.log('heelo my middleware');
    next();
}


app.get('/', (req,res)=>{
    res.send('hello world from server');
})
app.get('/about', (req,res)=>{
    res.send('hello about world from server');
})
app.get('/contact',middleware, (req,res)=>{
    res.send('hello contact world from server');
})
app.get('/signin', (req,res)=>{
    res.send('hello signin world from server');
})
app.get('/signup', (req,res)=>{
    res.send('hello signup world from server');
})
app.listen(3001, ()=>{
    console.log('server running at 3001');
})