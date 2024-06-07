import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackItem from './components/FeedbackItem';
import './App.css';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  const editFeedback = (index, updatedFeedback) => {
    const newFeedbacks = feedbacks.map((fb, i) =>
      i === index ? updatedFeedback : fb
    );
    setFeedbacks(newFeedbacks);
  };

  const deleteFeedback = (index) => {
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
  };

  return (
    <div className="App">
      <h1>Feedback System</h1>
      <FeedbackForm addFeedback={addFeedback} />
      <div className="feedback-list">
        {feedbacks.map((feedback, index) => (
          <FeedbackItem
            key={index}
            feedback={feedback}
            index={index}
            editFeedback={editFeedback}
            deleteFeedback={deleteFeedback}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
