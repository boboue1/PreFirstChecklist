import React from 'react';

const TaskItem = ({ task, onToggle }) => {
  const { id, title, description, status } = task;

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={status === 1}
        onChange={() => onToggle(id)}
      />
      <div className="task-details">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default TaskItem;
