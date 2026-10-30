import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import logo from './assets/KYRA Logo.png';
function LandingScreen() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  // UI Debug state so you can see what's happening live
  const [handStatus, setHandStatus] = useState("Looking for hand...");
  const [waveCount, setWaveCount] = useState(0);

  const prevXRef = useRef(null);
  const waveCountRef = useRef(0);
  const lastDirRef = useRef(null);

  useEffect(() => {
    let handLandmarker = null;
    let animationFrameId = null;
    let stream = null;

    const setupCameraAndDetector = async () => {
      try {
        //1. Start Web Camera
        // stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // if (videoRef.current) {
        //   videoRef.current.srcObject = stream;
        //   await videoRef.current.play();
        // }

        // 2. Initialize MediaPipe Tasks-Vision Resolver & HandLandmarker
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          numHands: 1
        });

        setHandStatus("Camera ready! Show your hand.");

        // 3. Frame processing loop
        const predictWebcam = () => {
          if (videoRef.current && handLandmarker && videoRef.current.readyState === 4) {
            let startTimeMs = performance.now();
            const results = handLandmarker.detectForVideo(videoRef.current, startTimeMs);

            if (results.landmarks && results.landmarks.length > 0) {
              setHandStatus("Hand Detected! 👋 Wave left & right");
              
              // Landmark index 0 is the wrist coordinates
              const wrist = results.landmarks[0][0];
              const currentX = wrist.x;

              if (prevXRef.current !== null) {
                const deltaX = currentX - prevXRef.current;

                // Detect quick horizontal hand shift (a wave motion)
                if (Math.abs(deltaX) > 0.015) { // Lowered threshold slightly for easier detection
                  const currentDir = deltaX > 0 ? 'right' : 'left';
                  if (lastDirRef.current && lastDirRef.current !== currentDir) {
                    waveCountRef.current += 1;
                    setWaveCount(waveCountRef.current);
                  }
                  lastDirRef.current = currentDir;
                }
              }

              prevXRef.current = currentX;

              // When wave threshold is reached, stop tracks and route to /home
              if (waveCountRef.current >= 1) {
                setHandStatus("Wave detected! Navigating...");
                if (stream) {
                  stream.getTracks().forEach(track => track.stop());
                }
                navigate('/home');
                return;
              }
            } else {
              setHandStatus("No hand detected. Hold hand closer to camera.");
            }
          }
          animationFrameId = requestAnimationFrame(predictWebcam);
        };

        predictWebcam();
      } catch (err) {
        console.error("MediaPipe initialization error:", err);
        setHandStatus("Error initializing camera/AI.");
      }
    };

    setupCameraAndDetector();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (handLandmarker) {
        handLandmarker.close();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [navigate]);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '30px' }}>
      {/* Visible video preview so you can position your hand correctly */}
      <video 
        ref={videoRef} 
        style={{display:'none'}} 
        playsInline 
        muted 
      />
      <header className="App-header">
        <img src={logo} width="100" height="150" />
        <p>Ready to explore?</p>
        <p>Just wave</p>
      </header>
    </div>
  );
}

export default LandingScreen;