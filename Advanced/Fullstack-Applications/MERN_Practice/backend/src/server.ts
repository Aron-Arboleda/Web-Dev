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

import { MongoClient, ServerApiVersion } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client: MongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(): Promise<void> {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch((error: Error) => console.error(error));

// API routes
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../../dist/frontend")));

// Serve index.html for all non-API routes (for React routing)
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../dist/frontend/index.html"));
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
