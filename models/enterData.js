const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const enterDataSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    weight: { type: Number, required: true },
    steps: { type: Number, required: true },
    activity: { type: String, default: "No Activity" },
    duration: { type: Number, default: 0 },
    feel: { type: String, default: "Amazing" },
    fasting: { type: Number },
    diet: { type: String, default: "No Diet" }
  },
  { timestamps: true }
);

const enterData = mongoose.model("enterData", enterDataSchema);

module.exports = enterData;
