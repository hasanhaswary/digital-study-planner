import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Study Planner Dashboard</h1>
      <Link to="/tasks">Tasks</Link>
      <Link to="/study-sessions">Study Sessions</Link>
      <Link to="/progress">Progress</Link>
    </div>
  );
}

export default Dashboard;