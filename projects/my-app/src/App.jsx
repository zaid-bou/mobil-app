import React from 'react'
import './App.css'
import "./index.css";
import EducateMobileUI from './educateMobileUI'
import EducationLevels from './educationLevels';
import EducationLevelComponent from './EducationLevelComponent';
import EducationCoursePage from './components-app/educationCoursePage';
import EducationLevelPage from './components-app/educationLevelPage';
import EducateWelcomePage from './components-app/educateWelcomePage';
function App() {
  return (
    <>
      <EducateWelcomePage />
      <EducationLevelPage />
      <EducationCoursePage />
    </>
  );
}
export default App
