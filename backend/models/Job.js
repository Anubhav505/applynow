import mongoose from "mongoose"

const { Schema } = mongoose

//create job
const jobSchema = new Schema({
    title: {type: String, required: true},
    description: {type : String, required: true},
    createdBy : {type : mongoose.Schema.Types.ObjectId}
}, { timestamps: true })
export const Job = mongoose.model('Job', jobSchema)

//apply job
const applicationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }
}, { timestamps: true })
export const Application = mongoose.model('Application', applicationSchema)
