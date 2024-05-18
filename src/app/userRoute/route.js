require("dotenv").config();

let password = process.env.PASSWORD;

const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://jashan20preet21:${password}@cluster0.4vodml1.mongodb.net/bookDiary?retryWrites=true&w=majority&appName=Cluster0`)

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String
})

let User = mongoose.model('users', userSchema)

export async function POST(request){
    
}