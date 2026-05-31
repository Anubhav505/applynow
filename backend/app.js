import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import routes from "./routes/index.js";

const app = express()
const port = process.env.PORT

app.use(cors({
  origin: `${process.env.DOMAIN}`,
  credentials: true
}))
app.use(express.json())
app.use(cookieParser( ))
app.use(routes)

const startServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB}`);
    console.log("MongoDB connected")
    
    app.listen(port, () => {
      console.log(`port is running localhost:${port}`)
    });
  } catch (error) {
    console.error(error.message)
  }
}

startServer()
