import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema({
    username: { type: String },
    password: {
        type: String,
        select: false
    },
    token: { type: String }
})

const User = mongoose.model('User', userSchema)

export default User