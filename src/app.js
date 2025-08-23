import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

const corsConfig = {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}

app.use(cors(corsConfig))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}