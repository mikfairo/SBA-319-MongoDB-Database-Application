import mongoose from "mongoose";

const cropsSchema = new mongoose.Schema({
    
    single: {
      type: [String],
      required: true,
    },
    multiple: {
        type: [String],
        required: true,
    }
});

const seasonsSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
  crops: {
    type: cropsSchema,
    require: true
  },
  festivals: {
    type: [String],
    default: true,
  },
});

const Seasons = mongoose.model("seasons", seasonsSchema, "seasons");

export default Seasons;
