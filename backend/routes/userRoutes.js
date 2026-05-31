import express from "express"
import { register, login, logout, checkAuth} from "../controllers/userController.js"
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router()

//New User Route
router.post("/register", register)

//Login User Route
router.post("/login", login)

//logout 
router.post("/logout", logout)

//check wether logged in or logout
router.get("/me", authMiddleware, checkAuth)

export default router