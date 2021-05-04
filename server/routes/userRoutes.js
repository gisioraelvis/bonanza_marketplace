import express from "express";
import User from '../models/userModel.js'

const router = express.Router();

router.get('/', async(req,res)=>{
    const user = await User.find({})
    res.send(user)

})

export default router;
