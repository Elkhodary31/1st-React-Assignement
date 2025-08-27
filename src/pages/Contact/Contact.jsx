import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import {Input,Button} from "@heroui/react";

export default function Contact() {
      useEffect(() => {
      document.title = "Contact";
    }, []);
  
  return (
    <>        <div className="container p-16 mt-16">
            <h2 className="font-bold text-secondary mt-5 uppercase text-4xl">conatct section</h2>
          <div className="center">
            <div className="center mt-4 text-secondary text-3xl relative">
              <span className="before:content-[''] before:block before:w-28 before:h-[4px] before:bg-secondary before:mr-3 "></span>
              <FaStar />
            <span className="after:content-[''] after:block after:w-28 after:h-[4px] after:bg-secondary after:ml-3 "></span>
            </div>
          </div>
        </div>
        <div>
          <div className="center flex-col ">
            <Input className="mb-3 w-1/2" label="Name" type="text" />
            <Input className="mb-3 w-1/2 " label="Age" type="number" />
            <Input className="mb-3 w-1/2" label="Email" type="email" />
            <Input className="mb-3 w-1/2" label="Password" type="password" />
            <div className="w-1/2 flex justify-start">
            <Button color="primary" className="font-bold mt-3 mb-3" >Send Message</Button>
            </div>
          </div>
        </div>
        </>

  )
}
