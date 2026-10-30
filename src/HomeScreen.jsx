import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';
import logo from './assets/KYRA Logo.png';
function HomeScreen() {
  const navigate = useNavigate();
  const [isCleared, setIsCleared] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "How can I help you today?";

  // Step 1: Wait for 3 seconds before clearing the welcome screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCleared(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Step 2: Slice-based typing animation
  useEffect(() => {
    if (!isCleared) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      currentIndex++;
      setTypedText(fullText.slice(0, currentIndex));

      if (currentIndex >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [isCleared]);

  return (
    <div className="App-header" style={{ padding: '50px', textAlign: 'center' }}>
      {!isCleared ? (
        <>
        <img src={logo} width="100" height="150" />
          <h1>Welcome!</h1>
          <p>I'm Kyra, your personal shopping assistant!</p>
        </>
      ) : (
        <div style={{ minHeight: '150px' }}>
          <h2 style={{ fontSize: '2rem', color: '#fff' }}>
            {typedText}
           
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </h2>
          <div><Button style={{ backgroundColor: '#808080', color: '#ffffff' }}  onClick={() => navigate('/home/screen1')} >
  I'm just browsing
</Button></div>
<div href=""><Button style={{ backgroundColor: '#808080', color: '#ffffff' }}  onClick={() => navigate('/home/screen2')} >  I know what I'm looking for
</Button></div>

        </div>
      )}
    </div>
  );
}

export default HomeScreen;