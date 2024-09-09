// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}

app.use(express.json()); //allow us to access JSON data in the req.body

app.use("/api/products",productRoutes)

app.listen(PORT,()=>{
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})

// Re8wPyJ4mTvnJcFJ