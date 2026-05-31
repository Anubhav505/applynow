import express from "express"
import {jobCreate, jobDelete, jobUpdate, getAllJobs, getSingleJob, applyJob, appliedJobs, myPostedJobs, applicants, applicantProfile} from "../controllers/jobController.js"
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router()

//create new job
router.post("/create", authMiddleware, jobCreate)

//update job
router.put("/update/:id", authMiddleware, jobUpdate)

//delete job
router.delete("/delete/:id", authMiddleware, jobDelete)

//get all jobs
router.get("/getAllJobs", authMiddleware, getAllJobs)

//get single job detail
router.get("/getSingleJob/:id", authMiddleware, getSingleJob)

//apply job
router.post("/applyJob/:id", authMiddleware, applyJob)

//view applied jobs
router.get("/appliedJobs", authMiddleware, appliedJobs)

//view my posted jobs
router.get("/myPostedJobs", authMiddleware, myPostedJobs)

// view applicant's applied to job
router.get("/applicants/:id", authMiddleware, applicants)

// view applicant's profile
router.get("/applicant-profile/:id", authMiddleware, applicantProfile)

export default router