import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/api/tasks/USER_ID`)
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, [apiBaseUrl]);
  
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title} - {task.dueDate}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
