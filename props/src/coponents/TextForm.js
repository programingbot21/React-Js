import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('rerghfhgf')
    // const [deltext, setDeltext] = useState(text)
    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
        
    }
    const handleOnClick = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }

    const handleDelete = () =>{
      let newtext = "";
      setText(newtext)
      
  }

  return (
    <>
    <div className={"container"} style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3  min-w-2 ">
   
    <textarea className="form-control w-80" value={text} 
    style={{background: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'
  }} onChange={handleOnClick} id="exampleFormControlTextarea1" rows='5' />

  </div>
  <button className='btn btn-primary ' onClick={handleUpClick}>button</button>
  
<button className='btn btn-primary ' onClick={handleDelete} >Delete</button>
    
    
  
  
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Ypur test Summary</h1>
    <p> {text.split(' ').length} words and {text.length}</p>
    <p> { 0.008 * text.split(' ').length} Minutes Read </p>
</div>

</>
  )
}

export default TextForm