import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('rerghfhgf')
    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
        
    }
    const handleOnClick = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }

  return (
    
    <div >
  <h1>{props.heading}</h1>
  <div className="mb-3  ">
   
    <textarea className="form-control" value={text}  onChange={handleOnClick} id="exampleFormControlTextarea1" rows='5' />

  </div>
  <button className='btn btn-primary ' onClick={handleUpClick}>button</button>
</div>

    
  )
}

export default TextForm