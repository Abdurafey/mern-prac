import { Router } from 'express'
import db from "../db/index.js"
import {User} from "../models/userSchema.js"

const router = Router();

router.get("/", (req, res) => {
    res.send("hessssllo world from server");
  });


// post router on http:localhost/4000/register
//using promises
// router.post('/register', (req,res)=>{

//   const {name, email, phone, work, password, cpassword} = req.body;
//   console.log(req.body);
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({error: "Please fill the field properly"});
//   }

//   await User.findOne({email})
//   .then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({error: "User EXist"});      
//     }
//     // const user = new User(req.body)
//     const user = new User({name, email, phone, work, password, cpassword})

//     user.save().then(()=>{
//       res.status(201).json({message: "Created Successfully"})
//     }).catch((err) =>{
//       res.status(500).json({message: "Failed to register"})
//     })
//   }).catch(err => {console.log(err);})


//     // console.log(req.body);
//     // res.json({message:req.body})
// })

router.post('/register', async (req,res)=>{

  const {name, email, phone, work, password, cpassword} = req.body;
  console.log(req.body);
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({error: "Please fill the field properly"});
  }

  try {
    const userExist = await User.findOne({email})

    if (userExist) {
      return res.status(422).json({error: "User EXist"});            
    }
    //if not exist then get below data
    const user = new User({name, email, phone, work, password, cpassword});

    await user.save();

    res.status(201).json({message: "Created Successfully"})      

    // if (userRegister) {
    //   res.status(201).json({message: "Created Successfully"})      
    // }else{
    //   res.status(500).json({message: "Failed to register"})
    // }
  } catch (err) {
    console.log(err)
  }
  




    // console.log(req.body);
    // res.json({message:req.body})
}) 


router.post('/login', async (req,res)=>{
  try {
  const { email,  password} = req.body;

  if (!email || !password) {
    return res.status(400).json({error:"Plz fill the data!"})
  }
  
  const userLogin = await User.findOne({email});

  console.log(userLogin);
  if (!userLogin) {
    res.json({error: "user error"})
  }
  res.json({message: "user signin successfuly!"})
 } catch (err) {
  console.log(err);
 }
  
}) 

export default router;