import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import StartPage from './pages/StartPage'; 
import GamePage from './pages/GamePage'; 
import SettingsPage from './pages/SettingsPage'; 
import styles from './App.module.css'; 
import LeaderboardPage from './pages/LeaderboardPage';
import CookieConsent from "react-cookie-consent";

/**
 * Головний компонент додатку Hangman.
 * Відповідає за маршрутизацію (роутинг) сторінок гри та відображення GDPR Cookie банера.
 * * @component
 * @returns {JSX.Element} Повертає відрендерений додаток з маршрутами.
 */

function App() {

  const handleAcceptCookie = () => {
    console.log("Cookie consent accepted! Initializing analytics...");
    localStorage.setItem("gdpr_analytics_enabled", "true");
  };

  const handleDeclineCookie = () => {
    console.log("Cookie consent declined! Tracking disabled.");
    localStorage.setItem("gdpr_analytics_enabled", "false");
  };

  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        
        <Route path="/settings" element={<SettingsPage />} />
        
        <Route path="/game/:userName" element={<GamePage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        cookieName="hangmanGdprConsent"
        style={{ background: "#706c6c", alignItems: "center", zIndex: 9999 }}
        buttonStyle={{ background: "#6ddf71", color: "white", fontSize: "14px", borderRadius: "5px", padding: "8px 15px", fontWeight: "bold" }}
        declineButtonStyle={{ background: "#e56161", color: "white", fontSize: "14px", borderRadius: "5px", padding: "8px 15px", fontWeight: "bold" }}
        expires={150}
      >
        This site uses cookies to provide the best user experience. By continuing to use the site, you agree to our privacy policy.{" "}
      </CookieConsent>
    </div>
  );
}

export default App;