import React, { useState } from 'react'

function Contact() {
  const [del, setDel] = useState(true)
  const [imgAdd, setImg] = useState(null)
  const [cdel, setCdel] = useState(true)

  const handleDelete1 = () =>{
    setCdel(false)
  }


  const handleImageAdd = (event) => {
      const file = event.target.files[0];
      if(file){
        const imgURL = URL.createObjectURL(file);
        setImg(imgURL)
      }
  }

  const handleDelete = () => {
      setDel(false)
  }
  return (
    <div className='flex items-center justify-center  p-20 flex-col'>
        <div className=''>
            <h1 className='text-3xl  text-center mb-5 text-green-700'>Image Show</h1>
            {del && (
            <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt=''/> )}
            {!del && <p>IMAGE Delete</p>}
            
           <div className='mt-9'> 
           <button type='button' onClick={handleDelete} className=' rounded-lg px-5 hover:bg-blue-500 focus:outline-none focus:ring-blue-300 py-4 w-30 focus:ring-4 bg-blue-950 text-center text-white'>Image Delete</button></div>
        </div>
        <div className='flex-col'>
          <h1 className='text-3xl text-center mb-5'  > Image Upload</h1>
          {/* <input type='file' accept='imgAdd/*' onChange={handleImageAdd}/> */}  
          {cdel && (
            <img className='rounded-lg border-none' style={{ width: "700px", height: "500px" }} src={imgAdd} alt=''/>
          )}

          <div>
          <button type='button' onClick={handleDelete1} className=' rounded-lg px-5 hover:bg-blue-500 focus:outline-none focus:ring-blue-300 py-4 w-30 focus:ring-4 bg-blue-950 text-center text-white'>Image Delete</button>
          <input className='bg-slate-900 mb-5 text-white rounded-lg text-3xl border-none' type='file' accept='imgAdd/*' onChange={handleImageAdd}/>
          </div>
        </div>

    </div>
  )
}

export default Contact
