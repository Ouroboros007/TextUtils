import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode , setMode]=useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };
  const toggleMode =()=>{
    if(mode=== 'dark'){
      setMode('light');
      document.body.style.backgroundColor = '#f8fafc'; // Light background
      document.body.style.color = '#000';
      showAlert("Light mode has been enabled", "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#0f172a'; // Dark background
      document.body.style.color = '#fff'; // Light text
      showAlert("Dark mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar navbarBrand = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm heading="Enter the Text to Analyse" mode={mode} showAlert={showAlert} />
    </div>
    </>
  );
}

export default App;
