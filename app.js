import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import SingleCrops from "./models/crops.js";
import Seasons from "./models/seasons.js";
import singleCrops from "./data/crops-data.js";
import seasons from "./data/seasons-data.js";
import Animals from "./models/animals.js";
import animals from "./data/animals-data.js";
import seasonsRouter from "./routes/seasons.js";

const ATLAS_URI = process.env.ATLAS_URI;

await mongoose.connect(ATLAS_URI);
console.log("Connected to Mongoose");

//clear Mongodb to prevent duplicates before each run
await SingleCrops.deleteMany({})
await Seasons.deleteMany({})
await Animals.deleteMany({})

SingleCrops.create(singleCrops); // to connect data to the schema collection
Seasons.create(seasons);
Animals.create(animals);


const app = express();

app.use(express.json());
app.use("/seasons", seasonsRouter);

app.get("/", (req, res) => {
  res.send("Its running!");
});

app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
