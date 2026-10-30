import './App.css';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from '@mui/material';
function Screen2(){
     const navigate = useNavigate();
    return(
        <div className="App-header">

       
                <div style={{ minHeight: '150px' }}>
          <h2 style={{ fontSize: '2rem', color: '#fff' }}>
          What are you looking for  ?        
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </h2>
          <Button style={{ backgroundColor: '#808080', color: '#ffffff' }}  onClick={() =>{}} >
 Outfit
</Button>
<Button style={{ backgroundColor: '#808080', color: '#ffffff' }}  onClick={() => navigate('/home/screen2/pick')} >  Pick a piece
</Button>

        </div>
         </div>
    );
}
export default Screen2;