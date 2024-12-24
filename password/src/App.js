
import { useState , useCallback, useEffect, useRef } from 'react';


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  

  //useref hook
  const passwordref = useRef(null)

 const passGen = useCallback(() =>{
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(number) str += "0123456789"
    if(char) str +="!@#$%^&*-_+=[]{}~`"

    
    for (let i = 1; i <= length; i++) {
      let charr = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charr)
      
    }

    setPassword(pass)
 }, [length, number, char, setPassword]) // optimize


 const copyPasswordClipboard = useCallback(() => {
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0, 100)
  window.navigator.clipboard.writeText(password)
 }, [password])

 useEffect(() => {   // any change run again 
    passGen()
 }, [length, number,char, passGen])

  return (
    <>
    <div className='w-full max-w-md mx-auto 
     shadow-md
    rounded-lg px-4 py-3
     my-8  bg-gray-800 text-orange-500
    '>
      <h1 className='text-white text-center my-3'> Password generator</h1>
      <div className='flex shadow rounded-lg 
      overflow-hidden mb-4'>
        <input type='text'
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordref}
       />
       <button 
       onClick={copyPasswordClipboard}
       className='outline-none bg-blue-700 text-white
        px-3 py-0.3 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {(setLength(e.target.value))}}/>
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
                     type='checkbox' 
                     defaultChecked={number}
                    id='numberInput'
                    onChange={() => {setNumber((prev)=>
                    !prev)}} />
          <label>number: {number}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
                     type='checkbox' 
                     defaultChecked={char}
                    id='characterInput'
                    onChange={() => {setChar((prev)=>
                    !prev)}} />
          <label>Charter: {char}</label>
        </div>
      </div>
     </div>
    </>
  );
}

export default App;
