
// import './App.css';
import { useState } from 'react';
import Navbar from './coponents/Navbar';
import TextForm from './coponents/TextForm';
import Alert from './coponents/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert =(message, type) => {
      setAlert({
        msg: message,
        type: type
      })
  }

  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been Enable", 'succes');

  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been Enable", 'succes')
  }
}
  return (
    <>
<Navbar  abouttext="Home Link" mode={mode}  toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>
<TextForm heading="Enter State" mode={mode}/>
</div>
</>
  );
}

export default App;
