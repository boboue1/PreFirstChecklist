import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskItem from '../components/TaskItem';
import { getChecklist, toggleTaskStatus } from '../api';

const Checklist = () => {
  const { id } = useParams();
  const [checklist, setChecklist] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getChecklist(id).then(data => setChecklist(data));
  }, [id]);

  const handleTaskToggle = (taskId) => {
    toggleTaskStatus(id, taskId).then(updatedChecklist => setChecklist(updatedChecklist));
  };

  if (!checklist) return <p>Loading...</p>;

  return (
    <div>
      <h1>{checklist.title}</h1>
      <p>{checklist.description}</p>
      <ul className="task-list">
        {checklist.tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleTaskToggle}
          />
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Dashboard</button>
    </div>
  );
};

export default Checklist;
