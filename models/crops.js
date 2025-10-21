import mongoose from "mongoose";

const singleCropsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  cost: {
    type: Number,
    default: true,
  },
   harvest: {
    type: Number,
    default: true,
  },
   sellsFor: {
    type: Number,
    default: true,
  },
});

const SingleCrops = mongoose.model("singlecrops", singleCropsSchema, "singlecrops");

export default SingleCrops;
