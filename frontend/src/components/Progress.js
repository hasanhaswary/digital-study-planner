import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Progress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/progress/USER_ID')
      .then(response => setProgress(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Progress</h1>
      <ul>
        {progress.map(prog => (
          <li key={prog._id}>
            Task: {prog.taskTitle} - Completed: {prog.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;
