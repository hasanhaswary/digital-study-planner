import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudySessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/api/tasks/USER_ID`)
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, [apiBaseUrl]);

  return (
    <div>
      <h1>Study Sessions</h1>
      <ul>
        {sessions.map(session => (
          <li key={session._id}>
            {session.subject} - {session.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudySessions;
