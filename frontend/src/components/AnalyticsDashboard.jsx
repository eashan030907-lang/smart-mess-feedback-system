import React from 'react';

const AnalyticsDashboard = () => {
    const averageRating = 4.2; // Placeholder value
    const wasteLevelDistribution = { low: 30, medium: 50, high: 20 }; // Placeholder values
    const mealTypeDistribution = { breakfast: 25, lunch: 45, dinner: 30 }; // Placeholder values

    return (
        <div>
            <h1>Feedback Analytics</h1>
            <h2>Average Rating: {averageRating}</h2>
            <h3>Waste Level Distribution</h3>
            <ul>
                <li>Low: {wasteLevelDistribution.low}%</li>
                <li>Medium: {wasteLevelDistribution.medium}%</li>
                <li>High: {wasteLevelDistribution.high}%</li>
            </ul>
            <h3>Meal Type Distribution</h3>
            <ul>
                <li>Breakfast: {mealTypeDistribution.breakfast}%</li>
                <li>Lunch: {mealTypeDistribution.lunch}%</li>
                <li>Dinner: {mealTypeDistribution.dinner}%</li>
            </ul>
        </div>
    );
};

export default AnalyticsDashboard;