import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChecklistItem from '../components/ChecklistItem';
import { getChecklists, deleteChecklist } from '../api';

const Dashboard = () => {
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    getChecklists().then(data => setChecklists(data));
  }, []);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this checklist?')) {
      deleteChecklist(id).then(() => setChecklists(checklists.filter(c => c.id !== id)));
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/form" className="btn">NEW</Link>
      {checklists.length === 0 ? (
        <p>No checklists available.</p>
      ) : (
        <div className="checklist-list">
          {checklists.map(checklist => (
            <ChecklistItem
              key={checklist.id}
              checklist={checklist}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
