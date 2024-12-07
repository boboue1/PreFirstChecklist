import axios from 'axios';

const API_URL = 'https://api.example.com';

export const getChecklists = () => axios.get(`${API_URL}/checklists`).then(res => res.data);
export const getChecklist = (id) => axios.get(`${API_URL}/checklists/${id}`).then(res => res.data);
export const saveChecklist = (checklist) =>
  checklist.id
    ? axios.put(`${API_URL}/checklists/${checklist.id}`, checklist).then(res => res.data)
    : axios.post(`${API_URL}/checklists`, checklist).then(res => res.data);
export const deleteChecklist = (id) => axios.delete(`${API_URL}/checklists/${id}`);
export const toggleTaskStatus = (checklistId, taskId) =>
  axios.patch(`${API_URL}/checklists/${checklistId}/tasks/${taskId}`).then(res => res.data);
