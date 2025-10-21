import mongoose from "mongoose";

const animalsSchema = new mongoose.Schema({
  breed: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    require: true
  },
  cost: {
    type: Number,
    default: true,
  },
  produces: {
    type: [String],
    require: true,
  }
});

const Animals = mongoose.model("animals", animalsSchema, "animals");

export default Animals;
