import logo from './logo.svg';
import './App.css';
import LandingScreen from './LandingScreen';
import HomeScreen from './HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Pick2 from './Pick2';
import Pick1 from './Pick1';
import OutfitAnalysis from './OutfitAnalysis';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        {/* The initial screen with the wave detector */}
        <Route path="/" element={<LandingScreen />} />
        
        {/* The screen you land on after waving */}
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/home/screen1" element={<Screen1 />} />
        <Route path="/home/screen2" element={<Screen2 />} />
         <Route path="/home/screen1/pick" element={<Pick1 />} />
        <Route path="/home/screen2/pick" element={<Pick2 />} />
        <Route path="/home/screen1/outfit_analysis" element={<OutfitAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
