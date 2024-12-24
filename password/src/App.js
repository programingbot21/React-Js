
import { useState , useCallback } from 'react';
// import './App.css';

function App() {
  const [length, setLength] = useState(0)
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');
 
 const passGen = useCallback(() =>{
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(number) str += "0123456789"
    if(char) str +="!@#$%^&*-_+=[]{}~'"

    let array = 0
    for (let i = 1; i <= array.length; i++) {
      let charr = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(charr)
      
    }

    setPassword(pass)
 }, [length, number, char, password])

  return (
    <>
    <div className='w-full max-w-md mx-auto center shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>test</div>
    </>
  );
}

export default App;
