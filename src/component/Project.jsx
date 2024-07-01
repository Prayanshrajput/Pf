import React from 'react'
import { Inner_project } from './Inner_project'

export const Project = () => {
  return (
    <div id='project' className="flex flex-wrap w-screen   h-screen bg-black text-white">
      <div className="flex flex-wrap justify-center items-center w-screen h-auto"><h1  className=" text-3xl font-extrabold ">Projects</h1></div>
      <div className='flex flex-wrap justify-evenly  w-screen h-screen '>
      
       <Inner_project></Inner_project>
       <Inner_project></Inner_project>
       <Inner_project></Inner_project>
       
      </div>
    </div>
    
  )
}
