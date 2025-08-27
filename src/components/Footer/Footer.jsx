import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-center p-16 bg-secondary text-white text-4xl">
<div className="grid md:grid-cols-3   gap-8 container">
  <div className="text-center">
    <h3 className="uppercase mb-3 font-bold text-lg">Location</h3>
    <p className="text-sm">2215 John Daniel Drive</p>
    <p className="text-sm">Clark, MO 65243</p>
  </div>

  <div className="text-center">
    <h3 className="uppercase mb-3 font-bold text-lg">Around The Web</h3>
<div className="flex justify-center gap-4">
  <div className="p-2 border border-white rounded-full">
    <FaFacebook className="text-lg text-white" />
  </div>
  <div className="p-2 border border-white rounded-full">
    <FaTwitter className="text-lg text-white" />
  </div>
  <div className="p-2 border border-white rounded-full">
    <FaLinkedin className="text-lg text-white" />
  </div>
  <div className="p-2 border border-white rounded-full">
    <AiOutlineGlobal className="text-lg text-white" />
  </div>
</div>

  </div>

  <div className="text-center">
    <h3 className="uppercase mb-3 font-bold text-lg">About freelancer</h3>
    <p className="text-sm">
      Freelance is a free to use, licensed Bootstrap theme created by Route
    </p>
  </div>
</div>
    </footer>
  );
}
