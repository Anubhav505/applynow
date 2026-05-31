import express from "express"
import userRoutes from "./userRoutes.js"
import jobRoutes from "./jobRoutes.js"

const router = express.Router()

router.use("/users", userRoutes)

router.use("/jobs", jobRoutes)

export default router
