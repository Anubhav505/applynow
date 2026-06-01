import { Job, Application } from "../models/Job.js"
import User from "../models/User.js";

//create job post
export const jobCreate = async (req, res) => {
    try {
        const { title, description } = req.body
        const job = await Job.create({
            title,
            description,
            createdBy: req.user.id
        })
        res.status(201).json({
            message: "job created sucessfully"
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: error.message
        })
    }

}

//update job post
export const jobUpdate = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)

        if (!job) {
            return res.status(404).json({
                message: "unable to update"
            })
        }

        if (!job.createdBy.equals(req.user.id)) {
            return res.status(403).json({ message: "Not allowed" });
        }

        await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        )

        res.status(200).json({
            message: "job updated sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//delete job post
export const jobDelete = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)

        if (!job) {
            return res.status(404).json({
                message: "no job ffound"
            })
        }

        if (!job.createdBy.equals(req.user.id)) {
            return res.status(403).json({
                message: "not allowed"
            })
        }

        await Job.findByIdAndDelete(
            req.params.id
        )

        res.status(200).json({
            message: "job deleted sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get all job post
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find()
    res.status(200).json(jobs)
}

//get single job details 
export const getSingleJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)
        res.status(200).json(job)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get job details for edit if user is creator of job
export const getJobForEdit = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id)
        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            })
        }

        if (!job.createdBy.equals(req.user.id)) {
            return res.status(403).json({
                message: "not allowed"
            })
        }

        res.status(200).json(job)
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//apply job
export const applyJob = async (req, res) => {
    const application = await Application.create({
        user: req.user.id,
        job: req.params.id
    })

    res.status(201).json({
        message: "job applied",
        application
    })
}

//view applied jobs
export const appliedJobs = async (req, res) => {
    const applications = await Application.find({ 
        user: req.user.id 
    }).populate("job")

    res.status(200).json({ 
        applications, 
        message: "view applied jobs"
    })
}

//my-posted-jobs
export const myPostedJobs = async (req, res) => {
    const myPostedJobs = await Job.find({
        createdBy: req.user.id
    }).sort({ createdAt: -1 })
    
    res.status(200).json({
        myPostedJobs,
        message: "My Posted Jobs"
    })
}

// view applicants applied to job
export const applicants = async (req, res) => {
    const viewApplicants = await Application.find({
        job: req.params.id
    }).populate("user")
    
    res.status(200).json({
        viewApplicants,
        message: "users found"
    })
}

//view applicant's profile 
export const applicantProfile = async (req, res) => {
    const findApplicantDetails = await User.findById(req.params.id)
    
    res.status(200).json({
        findApplicantDetails,
        message: "users found"
    })
}