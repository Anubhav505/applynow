import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
   try {
      const { username, password } = req.body
      const hashPassword = await bcrypt.hash(password, 10)

      //already exists
      const alreadyExists = await User.findOne({ username })
      if (alreadyExists) {
         return res.status(400).json({
            message: "user already exists"
         })
      }

      //create user
      const user = await User.create({ username, password: hashPassword })
      if (!user) {
         return res.status(500).json({
            message: "user not created"
         })
      }

      //create token
      const token = jwt.sign(
         {
            id: user._id,
            username: user.username
         },
         process.env.SECRET_KEY,
         {
            expiresIn: "5h"
         }
      )

      res.cookie("token", token, {
         httpOnly: true,
         secure: true,
         sameSite: "strict",
         maxAge: 5 * 60 * 60 * 1000
      })

      res.status(201).json({ message: "user created" })
   } catch (error) {
      res.status(500).json({
         message: error.message
      })
   }
}

export const login = async (req, res) => {
   try {

      const { username, password } = req.body
      const user = await User.findOne({ username }).select("+password")
      if (!user) {
         return res.status(400).json({
            message: "User not found"
         })
      }

      const verify = await bcrypt.compare(password, user.password)
      if (!verify) {
         return res.status(400).json({
            message: "invalid password"
         })
      }

      //create token
      const token = jwt.sign(
         {
            id: user._id,
            username: user.username
         },
         process.env.SECRET_KEY,
         {
            expiresIn: "5h"
         }
      )

      res.cookie("token", token, {
         httpOnly: true,
         secure: false,
         sameSite: "strict",
         maxAge: 5 * 60 * 60 * 1000
      })

      res.status(201).json({ message: "sucessfully logged in" })
   } catch (error) {
      res.status(500).json({
         message: error.message
      })
   }
}

//logout
export const logout = (req, res) => {
   res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict"
   })

   return res.status(200).json({
      message: "Logout sucessful"
   })
}

//check wether loggedIn or not
export const checkAuth = (req, res) => {
   res.status(200).json({
      loggedIn: true,
      user: req.user,
      message: "logged in"
   })
}


// get progile
export const getProfile = async (req, res) => {
   try {
      const user = await User.findById(req.user.id)
      if (!user) {
         return res.status(404).json({
            message: "user not found"
         })
      }
      res.status(200).json({
         user, message: "user profile details fetched sucessfully"
      })
   } catch (error) {
      res.status(500).json({
         message: error.message
      })
   }
}

//update Profile
export const updateProfile = async (req, res) => {
   try {
      const {
         fullName,
         email,
         phone,
         location,
         bio,
         skills,
         education,
         experience,
         resume
      } = req.body

      const user = await User.findByIdAndUpdate(
         req.user.id,
         {
            fullName,
            email,
            phone,
            location,
            bio,
            skills,
            education,
            experience,
            resume
         },
         {
            returnDocument: "after"
         }
      )
      if (!user) {
         return res.status(404).json({
            message: "user not found"
         })
      }
      res.status(200).json({
         user, message: "Profile updated"
      })
   } catch (error) {
      res.status(500).json({
         message: error.message
      })
   }
}