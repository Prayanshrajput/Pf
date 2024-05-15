import React from 'react'
import "../All.css"
import { NavLink } from 'react-router-dom'
import { Project } from './Project'
import { FaGithub } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export const Navbar = () => {
   
  return (
    <div className=" mt-[10px] flex justify-around w-screen ">
      <div className='flex justify-between  text-zinc-50 w-[50%] '>
    <NavLink className="hover:font-extrabold " ><AnchorLink offset={50} href='#home'>Home</AnchorLink></NavLink>
    <NavLink className="hover:font-extrabold  " ><AnchorLink offset={100} href='#about'>About</AnchorLink></NavLink>
    <NavLink className="hover:font-extrabold " ><AnchorLink offset={50} href='#contect'>Content</AnchorLink></NavLink>
    <NavLink className="hover:font-extrabold " ><AnchorLink offset={50} href='#project'>Project</AnchorLink></NavLink>
</div>
<div className=" flex justify-around w-[15%]">
      <FaGithub className=" rounded-[18px] hover:bg-white " size={30}></FaGithub>
       <LiaLinkedin className="  hover:bg-white size={34} "  size={34}></LiaLinkedin>
      </div>
    </div>
  )
}
