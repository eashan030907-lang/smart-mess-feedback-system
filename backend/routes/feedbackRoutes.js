const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/feedback', async (req, res) => {
    try {
        const { userId, mealType, rating, foodItems, wasteLevel, overallFeedback, suggestions } = req.body;
        const feedback = new Feedback({ userId, mealType, rating, foodItems, wasteLevel, overallFeedback, suggestions });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/analytics', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        const totalFeedback = feedbacks.length;
        const averageRating = feedbacks.reduce((sum, f) => sum + f.rating, 0) / totalFeedback || 0;
        const wasteStats = feedbacks.reduce((acc, f) => {
            acc[f.wasteLevel] = (acc[f.wasteLevel] || 0) + 1;
            return acc;
        }, {});
        const mealTypeStats = feedbacks.reduce((acc, f) => {
            acc[f.mealType] = (acc[f.mealType] || 0) + 1;
            return acc;
        }, {});
        res.status(200).json({ totalFeedback, averageRating, wasteStats, mealTypeStats });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json({ message: 'Feedback updated successfully', feedback });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/feedback/:id', async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;