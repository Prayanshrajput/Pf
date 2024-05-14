import React, { useEffect, useState } from 'react'



export const Home = () => {

  let arr=["Software Developer","Web Developer","Full Stack Develper","Frontend"]
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
    <div className=" mt-[100px] flex  w-screen   h-1/2 border border-sky-500 ">
      <div className="flex justify-center  flex-col w-3/2 h-1/2 mt-10 border border-sky-500 ">
        <h1 className="font-extrabold text-[40px]"> PRAYANSH RAJPUT</h1>
        <h2 className="font-extrabold text-xl">{Occupation||"MERN"}</h2>
       
      </div>
      <div className="ml-[20%] w-1/2 h-3/2 mt-10 border border-sky-500 ">
      <img src="src\assets\vecteezy_developer-png-with-ai-generated_29711176.png" className="w-full h-full" alt="" />
      </div>

    </div>
  )
}
