// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Checklist from './pages/Checklist';
import Form from './pages/Form';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/checklist/:id" element={<Checklist />} />
        <Route path="/form/:id?" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
