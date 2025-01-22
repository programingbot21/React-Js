// import { useState } from 'react'
import React,{useState, useEffect} from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// function Sli() {
  const Sli = ({autoSlide=false, autoSlideInterval = 1000 }) => {
  
  

   const slides = [
    {
      url:'https://www.shutterstock.com/shutterstock/photos/2214033759/display_1500/stock-photo-new-delhi-india-oct-main-building-of-iit-delhi-campus-indian-institute-of-technology-2214033759.jpg'
    },
    {
      url:'https://images.unsplash.com/photo-1599634874901-e919c4fe1400?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlpdCUyMHJvb3JrZWV8ZW58MHx8MHx8fDA%3D'

    },
    {
      url:'https://i.ytimg.com/vi/NrSeGVgoYVQ/maxresdefault.jpg'
    },
    {
      url:'https://images.mid-day.com/images/images/2024/dec/IITrepresentationalpic_d.jpg'
    },
    {
      url:'https://i.cdn.newsbytesapp.com/images/l141_7951607930354.jpg'
    },
    {
      url:'https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg'
    }
   ];

   const [current, setCurrent] = useState(3);

   const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
   }


    useEffect(() => {
      if(autoSlide){
        const interval = setInterval(() => {
          setCurrent(current === slides.length - 1 ? 0 : current + 1);
        }, autoSlideInterval);
        return () => clearInterval(interval);
      }
  })

  return (
    <div className='max-w-[1900px] h-[500px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${slides[current].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
  
     {/* left Arrow */}
      
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 txet-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer '>
        <BsChevronLeft onClick={nextSlide} size={30}/>
      </div>



    {/* Riight Arrow   */}
    <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  right-5 txet-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer '>
      <BsChevronRight onClick={prevSlide} size={30}/>
      </div>

      {/* swiper Autoplay */}
      

<div className='flex top-4 justify-center py-2'>
  {slides.map((slide, index) => (
    <div className='cursor-pointer'>
    <RxDotFilled  key={index} onClick={() => setCurrent(index)} size={20} className={current === index ? 'text-blue-500' : 'text-black'} />
    </div>
  ))}

</div>
      
    </div>

  )
}

export default Sli
// hidden group-hover:block