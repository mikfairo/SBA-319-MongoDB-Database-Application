import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import SingleCrops from './models/crops.js';
import Seasons from './models/seasons.js';
import singleCrops from './data/crops-data.js';
import seasons from './data/seasons-data.js';


const ATLAS_URI = process.env.ATLAS_URI

await mongoose.connect(ATLAS_URI);
console.log('Connected to MongoDB')
SingleCrops.create(singleCrops);

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Its running!');
})

app.listen(3000, () => {
    console.log('Listening on port: 3000');
})
