import React, { useState } from 'react';

const FeedbackForm = () => {
    const [mealType, setMealType] = useState('');
    const [rating, setRating] = useState(1);
    const [foodItems, setFoodItems] = useState('');
    const [wasteLevel, setWasteLevel] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the feedback submission
        console.log({ mealType, rating, foodItems, wasteLevel, suggestions });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Meal Type:</label>
                <input
                    type="text"
                    value={mealType}
                    onChange={(e) => setMealType(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rating:</label>
                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <label>Food Items Consumed:</label>
                <input
                    type="text"
                    value={foodItems}
                    onChange={(e) => setFoodItems(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Waste Level:</label>
                <select
                    value={wasteLevel}
                    onChange={(e) => setWasteLevel(e.target.value)}
                    required
                >
                    <option value="None">None</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div>
                <label>Suggestions:</label>
                <textarea
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                />
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;