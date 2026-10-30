// Screen1.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';
import logo from './assets/KYRA Logo.png'
function Screen1() {
      const navigate = useNavigate();
    return(
        <div className="App-header">

       
                <div style={{ minHeight: '150px' }}>
          <h2 style={{ fontSize: '2rem', color: '#fff' }}>
          What would you like to try  ?        
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </h2>
          <Button style={{ backgroundColor: '#808080', color: '#ffffff' }}  onClick={() => navigate('/home/screen1/outfit_analysis')} >
 Outfit
</Button>
<Button style={{ backgroundColor: '#808080', color: '#ffffff' }}  onClick={() => navigate('/home/screen1/pick')} >  Pick a piece
</Button>

        </div>
         </div>
    );
}

export default Screen1; // <--- Change to default export