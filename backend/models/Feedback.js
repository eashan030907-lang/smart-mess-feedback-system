'use strict';

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    mealType: { type: String, required: true },
    rating: { type: Number, required: true },
    foodItems: { type: [String], required: true },
    wasteLevel: { type: String, required: true },
    overallFeedback: { type: String, required: true },
    suggestions: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);