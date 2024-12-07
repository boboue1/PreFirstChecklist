import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { saveChecklist, getChecklist } from '../api';

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checklist, setChecklist] = useState({
    title: '',
    description: '',
    tasks: [],
  });

  useEffect(() => {
    if (id) {
      getChecklist(id).then(data => setChecklist(data));
    }
  }, [id]);

  const handleSave = () => {
    saveChecklist(checklist).then(() => navigate('/'));
  };

  return (
    <div>
      <h1>{id ? 'Edit Checklist' : 'New Checklist'}</h1>
      <input
        type="text"
        placeholder="Title"
        value={checklist.title}
        onChange={(e) => setChecklist({ ...checklist, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={checklist.description}
        onChange={(e) => setChecklist({ ...checklist, description: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Form;
