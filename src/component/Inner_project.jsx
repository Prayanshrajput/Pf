import React from 'react'
import { Link } from 'react-router-dom'
let im="src/assets/project1.png"
export const Inner_project = () => {
  return (
    <div className=" mt-5 flex flex-wrap flex-col w-[250px] h-[250px] bg-orange-400">
        <img src="src/assets/project1.png" alt="" className="h-[200px] w-full "/>
        <h4>College Bus Management System</h4>
        <Link to="https://chatgpt.com" className="ml-[40%]">view</Link>
    </div>
  )
}
