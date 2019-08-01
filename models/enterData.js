const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enterDataSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    weight: { type: Number, required: true },
    steps: { type: Number, required: true },
    activity: { type: String },
    duration: { type: Number, required: true, default: 0 },
    feel: { type: Number },
    fasting: { type: Number }
  },
  { timestamps: true }
);

const enterData = mongoose.model("enterData", enterDataSchema);

module.exports = enterData;
