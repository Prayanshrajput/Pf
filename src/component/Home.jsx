import React, { useContext,useEffect, useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Listfornav } from './Listfornav'
import { Appcontext } from '../context/Appcontext'

export const Home = () => {

  const{Listfornavdata,setListfornavdata}=useContext(Appcontext)

  let arr=["Software Developer","Web Developer","Full Stack Develper","Frontend Develper"]
const[Occupation,SetOccupation]=useState(arr[0])

const [count,Setcount]=useState(0);
let len=arr.length;


useEffect(()=>{
const interval=setInterval(()=>{
  count>=len?Setcount(0):Setcount(count+1);
},1500)
return () => clearInterval(interval);
},[count])


useEffect(()=>{
  SetOccupation(arr[count])
},[count])


  return (
   <div className="flex ">

     <div id='home' className=" flex flex-wrap justify-center items-center  flex-col h border border-white w-screen h-screen bg-white">

<div className="flex  rounded-full w-[250px] h-[250px] max-w-[300px] max-h-[300px]  mt-10 border border-black ">
      <img src="src\assets\prayansh.png" className="  rounded-full w-cover h-cover  " alt="" />
      </div>

      <div className=" mt-5  flex justify-center items-center flex-col w-[450px] h-[100px] text-cyan-50">
        <h1 className="  font-extrabold text-3xl">I AM PRAYANSH RAJPUT</h1>
        <h2 className="  ml-[50px] font-extrabold text-xl">{Occupation||"MERN Develper"}</h2>
      </div>

      <div className="mt-5  flex text-white">
      <p>Resume -- </p>
      <NavLink  className=" rounded-lg bg-green-500 hover:bg-red-500"   to="https://drive.google.com/file/d/1jaiFHFEEupP9nyCCWyWnXLX4EeHbVAxN/view?usp=drive_link">View</NavLink>
      </div>

    </div>

  {
   Listfornavdata?<Listfornav></Listfornav>:<div></div>
  }

   </div>
  )
}
