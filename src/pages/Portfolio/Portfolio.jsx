import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaSearch, FaStar } from 'react-icons/fa'
const images = Object.values(import.meta.glob("../../assets/images/*",{eager:true,import:'default'}))
export default function Portfolio() {
  const [imageClick, setImageClick] = useState(false)
  const [imageURl, setImageURL] = useState('')
  function handleClick(source){
    setImageURL(source)
    setImageClick(true)
  }
  useEffect(() => {
      document.title = "Portfolio";
    }, []);
  
  return (
    <>

        <h2 className="pt-32 font-bold text-secondary uppercase text-4xl text-center whitespace-nowrap">portfolio component</h2>
              <div className="center">
                <div className="center mt-4 secondary-white text-3xl relative">
                  <span className="before:content-[''] before:block before:w-28 before:h-[4px] before:bg-secondary before:mr-3 "></span>
                  <FaStar />
                <span className="after:content-[''] after:block after:w-28 after:h-[4px] after:bg-secondary after:ml-3 "></span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 pb-16 ">
                  {images.map((src, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                      <img
                        onClick={()=>{
                          handleClick(src)
                        }}
                        src={src}
                        alt={`image-${index}`}
                        className="w-full h-full object-cover"
                      />
                      <div      
                        className="absolute top-0 left-0 h-full w-full pointer-events-none bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                        <FaSearch className="text-white text-5xl" />
                      </div>
                    </div>
                  ))}
         {imageClick && (
  <div 
    className="bg-black/75 fixed inset-0 z-50 flex items-center justify-center"
    onClick={() => setImageClick(false)} 
  >
    <img 
      src={imageURl}  
      alt="preview"
      className="max-w-[75%] max-h-[75%] rounded-lg shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}

              </div>
    </>
  )
}
