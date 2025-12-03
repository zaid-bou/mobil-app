import React from 'react'
import './App.css'
import "./index.css";

import EducateWelcomePage  from './components-app/educateWelcomePage';
import EducationLevelPage from './components-app/educationLevelPage';
import EducationCoursePage from './components-app/educationCoursePage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
  <Routes>
    <Route path="/" element={<EducateWelcomePage />} />
    <Route path ="/levels" element={<EducationLevelPage />} />
    <Route path ="/course" element={<EducationCoursePage />} />
  </Routes>
  );
}
export default App
