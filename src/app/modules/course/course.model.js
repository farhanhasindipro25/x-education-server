const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: String, required: true },
  duration: { type: String, required: true },
  level: { type: String, required: true },
  topics: [{ type: String, required: true }],
  schedule: {
    startDate: { type: String },
    endDate: { type: String },
    classDays: [{ type: String, required: true }],
    classTime: { type: String, required: true },
  },
});

const Course = model("Course", courseSchema);

module.exports = Course;
