import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [buttonOn, setButtonOn] = useState(0);
  const toggleAlert = () => {
    setButtonOn(prevValue => (prevValue? 0:1));
  }
  
  return (
    <div className="container"> 
      <Alert alertOn={buttonOn} toggleAlert={toggleAlert}></Alert>
      <Button alertOn={buttonOn} toggleAlert={toggleAlert}>Button</Button>
    </div>
  );
}

export default App
