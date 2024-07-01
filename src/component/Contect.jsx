import React from 'react'
import '../All.css'
export const Contect = () => {
  return (
   <div id='contect' className=" flex flex-wrap w-screen   h-screen bg-black text-white">
   <div className=" flex  justify-center items-center h-auto w-screen absolute"><h1  className=" text-3xl font-extrabold ">Contect</h1></div>
<div className="flex w-screen h-screen">
<div className=" flex flex-wrap flex-col justify-center items-center h-screen w-[40%]">
    <h1>Let's talk</h1>
    <p>Hii i am prayansh singh rajput i am full stack developer </p>
    <h4>github</h4>
   </div>
   <div className=" flex flex-wrap flex-col justify-center items-center h-screen w-[60%] text-black" >
    <label htmlFor="name" className="text-white">Name</label>
    <input type="text" name="name" id="" />
    <label htmlFor="email" className="text-white">Email</label>
    <input type="mail" name="" id="" />
    <label htmlFor="description" className="text-white">Description</label>
    <textarea name="" id="" rows="8" className="w-[40%]"></textarea>
    <button className="text-white">Send</button>
   </div>

</div>
    
   </div>
  )
}
