import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const userScroll = () => setScroll(window.scrollY > 35)

  useEffect(() => {
    window.addEventListener("scroll", userScroll)
    return () => window.removeEventListener("scroll", userScroll)
  }, [])



  return (
    <>
      <nav className={`${scroll ? 'py-2' : 'py-5'} flex justify-around items-center transition-[padding] duration-500 bg-secondary font-bold z-40 text-white fixed top-0 w-full px-8`}>
        <h2 className="text-2xl md:text-3xl uppercase">
          <Link to="/">Start Framework</Link>
        </h2>

        <ul className="hidden md:flex uppercase py-5">
          <li >
            <NavLink className="p-3" to="about">About</NavLink>
          </li>
          <li className="">
            <NavLink className="p-3" to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="">
            <NavLink className="p-3" to="/contact">Contact</NavLink>
          </li>
        </ul>

        <button
          className="md:hidden p-2 cursor-pointer"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </nav>


      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-secondary text-white z-50 md:hidden transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span className="text-xl uppercase">Menu</span>
          <button
            className="p-2"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-2 p-4 uppercase">
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="block px-2 py-3 rounded hover:bg-white/10">About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className="block px-2 py-3 rounded hover:bg-white/10">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block px-2 py-3 rounded hover:bg-white/10">Contact</NavLink>
          </li>
        </ul>
      </aside>
    </>
  )
}
