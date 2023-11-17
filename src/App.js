import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import  About  from './components/About';
import NoteState from './context/notes/NoteState';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState("");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
    <NoteState>
    <Navbar/>
    <Alert alert={alert}/>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='contact' element={<Contact/>}/>
      <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
      <Route exact path='/signup' element={<SignUp showAlert={showAlert}/>}/>
      </Routes>
      </div>
      </NoteState>
    </>
  );
}
export default App;