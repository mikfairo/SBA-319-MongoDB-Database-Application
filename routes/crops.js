import express from 'express'
import SingleCrops from '../models/crops.js';

const cropsRouter = express.Router();

cropsRouter.get('/', async (req,res) => {
    const allSingleCrops = await SingleCrops.find({});
    res.send(allSingleCrops);
});
cropsRouter.post('/get-crop-by-name', async (req,res) => {
    const body = req.body; //inner data body 
    const singleCrops = body.name.toLowerCase(); 
    const cropsInfo = await SingleCrops.find({ name: singleCrops }); //to find just the key/value of one season
    res.send(cropsInfo);
});
cropsRouter.delete('/delete-crop-by-name', async (req,res) => {
    const body = req.body;
    const name = body.name
    const result = await SingleCrops.deleteOne({ name: name })
    console.log(result)
    res.send("Success!");
});

export default cropsRouter;