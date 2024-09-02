import { config } from "dotenv";
import express from "express";
import connectDB from "./db/db.js";

config({ path: "./env" });

console.log(process.env.MONGODB_URI);

connectDB();
