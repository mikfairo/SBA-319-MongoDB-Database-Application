import express from 'express'
import SingleCrops from '../models/crops.js';

const cropsRouter = express.Router();

cropsRouter.get('/', async (req,res) => {
    const allSingleCrops = await SingleCrops.find({});
    res.send(allSingleCrops);
});
cropsRouter.post('/get-crops-by-name', async (req,res) => {
    const body = req.body; //inner data body 
    const singleCrops = body.name.toLowerCase(); 
    const cropsInfo = await SingleCrops.find({ name: singleCrops }); //to find just the key/value of one season
    res.send(cropsInfo);
});
export default cropsRouterRouter;