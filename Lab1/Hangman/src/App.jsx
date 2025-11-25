import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import StartPage from './pages/StartPage'; 
import GamePage from './pages/GamePage'; 
import SettingsPage from './pages/SettingsPage'; 
import styles from './App.module.css'; 

function App() {

  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        
        <Route path="/settings" element={<SettingsPage />} />
        
        <Route path="/game/:userName" element={<GamePage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;