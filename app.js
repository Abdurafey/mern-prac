import express from "express"


const app = express();

app.get('/', (req,res)=>{
    res.send('hello world from server');
})
app.get('/about', (req,res)=>{
    res.send('hello about world from server');
})
app.get('/contact', (req,res)=>{
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