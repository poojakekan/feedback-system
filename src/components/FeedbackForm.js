import React, { useState } from 'react';

const FeedbackForm = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rating && feedback) {
      addFeedback({ name, rating, feedback });
      setName('');
      setRating(0);
      setFeedback('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
        <option value="0">Select Rating</option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star} Star{star > 1 && 's'}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Your Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
