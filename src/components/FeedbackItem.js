import React, { useState } from 'react';

const FeedbackItem = ({ feedback, index, editFeedback, deleteFeedback }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(feedback.name);
  const [newRating, setNewRating] = useState(feedback.rating);
  const [newFeedback, setNewFeedback] = useState(feedback.feedback);

  const handleEdit = () => {
    setIsEditing(false);
    editFeedback(index, { name: newName, rating: newRating, feedback: newFeedback });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((star, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>&#9733;</span>
    ));
  };

  return (
    <div className="feedback-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <select
            value={newRating}
            onChange={(e) => setNewRating(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 && 's'}
              </option>
            ))}
          </select>
          <textarea
            value={newFeedback}
            onChange={(e) => setNewFeedback(e.target.value)}
          ></textarea>
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{feedback.name}</h4>
          <div className="rating">{renderStars(feedback.rating)}</div>
          <p>{feedback.feedback}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteFeedback(index)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default FeedbackItem;
