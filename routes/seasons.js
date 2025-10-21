import express from 'express'
import Seasons from '../models/seasons.js';

const seasonsRouter = express.Router();

seasonsRouter.get('/', async (req,res) => {
    // console.log("called seasons endpoint")
    const allSeasons = await Seasons.find({});
    res.send(allSeasons);
});
seasonsRouter.post('/get-season-by-name', async (req,res) => {
    const body = req.body;
    const season = body.time.toLowerCase();
    const seasonInfo = await Seasons.find({ time: season });
    res.send(seasonInfo);
});
export default seasonsRouter;