import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    
    fullName: String,
    name:String,
    email: String,
    phone: String,
    location : String,
    bio: String,
    skills: [String],
    education: String,
    experience: String,
    resume: String,
})

const User = mongoose.model('User', userSchema)

export default User