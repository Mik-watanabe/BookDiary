require("dotenv").config();
import User from "../models/user";
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

export async function POST(request){
    const user = await request.json();
    let newUser = new User(user)
    newUser.save()
    return Response.json({message: "Successfully posted"})
}