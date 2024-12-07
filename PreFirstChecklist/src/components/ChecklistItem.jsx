import React from 'react';
import { Link } from 'react-router-dom';

const ChecklistItem = ({ checklist, onDelete }) => {
  const { id, title, description, status, completedTasks, totalTasks } = checklist;

  return (
    <div className="checklist-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {['New', 'In Progress', 'Completed'][status]}</p>
      <p>{completedTasks} / {totalTasks} tasks completed</p>
      <div className="actions">
        <Link to={`/checklist/${id}`} className="btn">View</Link>
        <Link to={`/form/${id}`} className="btn">Edit</Link>
        <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default ChecklistItem;
