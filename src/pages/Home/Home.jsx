import React, { useEffect } from 'react'
import image from "../../assets/avatars.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaStar } from "react-icons/fa6";

export default function Home() {
      useEffect(() => {
      document.title = "Home";
    }, []);
  
  return (
    <>
      <img src={image} alt="avatar" className="w-1/6 mx-auto" />
        <h2 className="font-bold text-white mt-5 uppercase text-4xl">Start Framework</h2>
      <div className="center">
        <div className="center mt-4 text-white text-3xl relative">
          <span className="before:content-[''] before:block before:w-28 before:h-[4px] before:bg-white before:mr-3 "></span>
          <FaStar />
        <span className="after:content-[''] after:block after:w-28 after:h-[4px] after:bg-white after:ml-3 "></span>
        </div>
      </div>
        <p className="mt-2 text-white ">Graphic Artist - Web Designer - Illustrator</p>
    </>
  )
}
