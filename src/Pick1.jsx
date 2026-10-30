// Pick1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Box, Typography } from '@mui/material';

// 1. Import your images at the top of the file
import image1 from './assets/1.png';
import image2 from './assets/2.png'; 
import image3 from './assets/3.png'; 
import image4 from './assets/4.png'; 
import image5 from './assets/5.png'; 
function Pick1() {
  const navigate = useNavigate();

  return (
    <div className="App-header" style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Select a Category</h2>

      {/* Parent container configured for side-by-side layout using Flexbox */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',             // Space between the two boxes
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        {/* Card 1 */}
        <Box
        
          sx={{
            width: 140,
            height: 140,
            borderRadius: '16px',
            bgcolor: '#7A7A7A', // Figma grey card background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#666666',
              transform: 'scale(1.03)',
            },
          }}
          component="img"
          src={image1}
        >
          {/* Image 1 */}
        </Box>

        {/* Card 2 */}
        <Box
          
           component="img"
          src={image2}
          sx={{
            width: 140,
            height: 140,
            borderRadius: '16px',
            bgcolor: '#7A7A7A', // Figma grey card background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#666666',
              transform: 'scale(1.03)',
            },
          }}
        >
          {/* Image 2 */}
  
        </Box>
      </Box>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',             // Space between the two boxes
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        {/* Card 1 */}
        <Box
          
           component="img"
          src={image3}
          sx={{
            width: 140,
            height: 140,
            borderRadius: '16px',
            bgcolor: '#7A7A7A', // Figma grey card background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#666666',
              transform: 'scale(1.03)',
            },
          }}
        >
      
        </Box>

        {/* Card 2 */}
        <Box
          
           component="img"
          src={image4}
          sx={{
            width: 140,
            height: 140,
            borderRadius: '16px',
            bgcolor: '#7A7A7A', // Figma grey card background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#666666',
              transform: 'scale(1.03)',
            },
          }}
        >
          {/* Image 2 */}
          
        </Box>
      </Box>
            <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',             // Space between the two boxes
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        {/* Card 1 */}
        <Box
           component="img"
          src={image5}
          sx={{
            width: 140,
            height: 140,
            borderRadius: '16px',
            bgcolor: '#7A7A7A', // Figma grey card background
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              bgcolor: '#666666',
              transform: 'scale(1.03)',
            },
          }}
        >
          {/* Image 1 */}
          
        </Box>

        {/* Card 2 */}
 
      </Box>
    </div>
  );
}

export default Pick1;