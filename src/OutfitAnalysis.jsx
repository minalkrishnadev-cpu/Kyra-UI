import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useRef, useState} from 'react';
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
function OutfitAnalysis(){
    const navigate = useNavigate();
    const handleButtonClick = async () => {
  try{
    // 1. Tell the local backend to run your Python script
    await axios.post('http://localhost:5000/run-pipeline');
    console.log("Python script triggered successfully.");
  } catch (error) {
    console.error("Failed to run the Python script:", error);
  }

  // 2. Navigate to the next screen
  navigate('/home/screen1/outfit_analysis');
};
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="App-header">
            <h2>By continuing</h2>

            <p style={{textAlign:'center'}}>By continuing, you consent to Kyra capturing an image of you 
                to analyze your skin tone and fit and provide personalized 
                recommendations .
            </p>
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px', maxWidth: '450px', margin: '0 auto 25px auto' }}>
        <Checkbox 
          sx={{ color: "white" }} 
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)} // Updates state when clicked
        />
        <span style={{ color: 'white', textAlign: 'left', fontSize: '0.95rem' }}>
          Kyra needs to capture your image to analyze your skin tone and fit
        </span>
      </div>
           <Button 
        disabled={!isChecked} // 2. Button is disabled unless isChecked is true
        style={{ 
          backgroundColor: isChecked ? '#808080' : '#333333', // Dimmer grey when disabled
          color: '#ffffff',
          cursor: isChecked ? 'pointer' : 'not-allowed',
          opacity: isChecked ? 1 : 0.5,
          padding: '10px 30px'
        }} 
     // 3. Action when clicked
       onClick={handleButtonClick}>
        Continue
      </Button>
              
        </div>
    )
}
export default OutfitAnalysis;