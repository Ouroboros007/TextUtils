import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState, useEffect, useRef } from 'react';
function App() {
  const [mode , setMode]=useState('dark');
  const [alert, setAlert] = useState(null);
  const [activePage, setActivePage] = useState('home');  
  const [searchQuery, setSearchQuery] = useState('');
  const alertTimer = useRef(null);
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#0f172a' : '#f8fafc';
    document.body.style.color = mode === 'dark' ? '#fff' : '#000';
  }, [mode]);
  useEffect(() => {
  document.title =
    activePage === 'home' ? 'TextUtils - Home' : 'TextUtils - About';
}, [activePage]);
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
    <Navbar navbarBrand = "TextUtils" mode={mode} toggleMode={toggleMode} setActivePage={setActivePage} onSearch={(query) => {
    setSearchQuery(query);
    setActivePage('home'); 
    if (query.trim()) {
      showAlert(`Searching for "${query}"`, 'success');
    }
  }}/>
    <Alert alert={alert} />
    <div className="container my-3">
        {activePage === 'home' ? (
          <TextForm
            heading="Enter the Text to Analyse"
            mode={mode}
            showAlert={showAlert}
            searchQuery={searchQuery}
          />
        ) : (
          <About mode={mode} />
        )}
      </div>
    </>
  );
}

export default App;
