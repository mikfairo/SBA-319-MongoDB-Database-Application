import express from 'express'
import Animals from '../models/animals.js';

const animalsRouter = express.Router();

animalsRouter.get('/', async (req,res) => {
    const allAnimals = await Animals.find({});
    res.send(allAnimals);
});
animalsRouter.post('/get-animals-by-name', async (req,res) => {
    const body = req.body; //inner data body 
    const animals = body.breed.toLowerCase(); 
    const animalsInfo = await Animals.find({ breed: animals }); 
    res.send(animalsInfo);
});
export default animalsRouter;