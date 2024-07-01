import React, { useContext, useEffect, useState } from 'react'
import "../All.css"
import { NavLink } from 'react-router-dom'
import { Project } from './Project'
import { FaGithub } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { LiaAlignJustifySolid } from "react-icons/lia";
import { Listfornav } from './Listfornav'
import { Appcontext } from '../context/Appcontext'

export const Navbar = () => {

   const{Listfornavdata,setListfornavdata}=useContext(Appcontext)
  // const[Listfornavdata,setListfornavdata]=useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(width>600){
    setListfornavdata(false)
  }
   
  return (
    <div className=" fixed z-10 flex justify-around w-screen h-[50px] bg-black ">


<div className=" flex w-[20%] text-white items-center">

<NavLink className=" font-bold text-xl" >
    <AnchorLink offset={50} href='#home'>PRAYANSH RAJPUT</AnchorLink>
    </NavLink>
</div>

 {width>600?(  
     <div className='flex justify-evenly text-zinc-50 w-[70%] '>
<div className="flex justify-evenly items-center w-[80%] bg-black">
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

<div className=" flex justify-around text-white w-[20%] items-center">
      <FaGithub className=" rounded-[18px] hover:bg-indigo-300 " size={30}></FaGithub>
       <LiaLinkedin className="  hover:bg-yellow-400 "  size={34}></LiaLinkedin>
      </div>

</div>
):(<LiaAlignJustifySolid onClick={()=>(setListfornavdata(!Listfornavdata))} className="text-white" size={30}></LiaAlignJustifySolid>)}
    </div>

  )
}
