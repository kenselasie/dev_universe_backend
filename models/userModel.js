import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        required: true,
        minimum: 6,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

export default mongoose.model('User', userSchema)