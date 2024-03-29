import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import userRouter from './router/auth.js' 

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());


//link router file here as done below
app.use(userRouter);

//MIDDLEWARE
const middleware = (req, res, next) => {
  console.log("heelo my middleware");
  next();
};


app.get("/about", (req, res) => {
  res.send("hello about world from server");
});
app.get("/contact", middleware, (req, res) => {
  res.send("hello contact world from server");
});
app.get("/signin", (req, res) => {
  res.send("hello signin world from server");
});
app.get("/signup", (req, res) => {
  res.send("hello signup world from server");
});


const port = process.env.PORT;
connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log(`📔 Server is running at port : ${port}`);
        // app.on("error", (error)=>{
        //     console.log("ERRR:", error);
        //     throw error;
        // })
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed!!", error);
})
