import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been Enabled', 'success');
      document.title = 'TextUtils-Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been Enabled', 'success');
      document.title = 'TextUtils-Light Mode';
    }
  };

  return (
    <>
    { <Router>  
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyse" mode={mode} />}>    
            </Route>
          </Routes>
        </div>
    </Router> }



     
     {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

     <Alert alert={alert} />
     <div className="container my-3">
       
         {<TextForm showAlert={showAlert} heading="Enter The Text To Analyse" mode={mode} />}    
     </div> */}
  

    </>
  );
}
export default App;
