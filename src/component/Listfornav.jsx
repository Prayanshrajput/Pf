import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Listfornav = () => {
  return (
    <div className="  absolute flex  justify-end w-screen h-screen ">
      <div className=' fixed flex flex-col gap-8 justify-evenly text-zinc-50 w-[300px] h-[50%] items-center  bg-black'>
   

   <NavLink className="group" >
       <AnchorLink offset={50} href='#home'>Home</AnchorLink>
       <div className="w-[40px] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
       </NavLink>
   
       <NavLink className="group" >
         <AnchorLink offset={50} href='#about'>About</AnchorLink>
         <div className="w-[43px] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
         </NavLink>
       <NavLink className="group" >
         <AnchorLink offset={50} href='#contect'>Content</AnchorLink>
         <div className="w-[57px] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
         </NavLink>
   
       <NavLink className="group" >
         <AnchorLink offset={50} href='#project'>Project</AnchorLink>
         <div className="w-[52px] h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
         </NavLink>
      
   </div>

   
    </div>
  )
}
