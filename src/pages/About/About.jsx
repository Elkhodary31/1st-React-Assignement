import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'

export default function About() {

    useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="center flex-col pt-32 w-8/12 mx-auto">
        <h2 className="font-bold text-white uppercase text-4xl text-center whitespace-nowrap">about component</h2>
      <div className="center">
        <div className="center mt-4 text-white text-3xl relative">
          <span className="before:content-[''] before:block before:w-28 before:h-[4px] before:bg-white before:mr-3 "></span>
          <FaStar />
        <span className="after:content-[''] after:block after:w-28 after:h-[4px] after:bg-white after:ml-3 "></span>
        </div>
      </div>
        <div className="center !justify-between flex-wrap lg:flex-nowrap text-left py-5 text-white text-lg gap-5">
          <p>
           Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
    </div>
  )
}
