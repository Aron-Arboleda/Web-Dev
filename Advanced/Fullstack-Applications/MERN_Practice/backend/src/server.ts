import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
const uri: string = process.env.MONGODB_URI as string;

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000, // Optional: timeout after 5 seconds if no connection
  })
  .then(() => console.log("Connected to MongoDB with Mongoose!"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// API routes
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// Serve index.html for all non-API routes (for React routing)
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
