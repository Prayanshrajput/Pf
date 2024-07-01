import React from 'react'

export const About = () => {
  return (
    <div id='about' className="flex flex-wrap w-screen   h-screen bg-black text-white to-indigo-500 border border-red-600">

      <div className=" w-screen h-fix flex justify-center items-center">
      <h1 className=" text-3xl font-extrabold ">About ME</h1>
      </div>

    <div className=" flex w-screen h-screen ">
   
    <div className=" w-[30%] flex flex-col  h-screen border border-blue-900"  >
       <h1 className="text-[20px] font-bold">Skill</h1>

<ul className="list-disc ml-5 gap-3">
        <li>Language
          <div className="flex gap-2">
          <h1>Javascript</h1>
          <h1>C++</h1>
          <h1>Javacore</h1>
          </div>
        </li>

        <li>Framework
          <div className="flex gap-2">
          <h1>React js</h1>
          <h1>Express</h1>
          </div>
        </li>

        <li>
          Database
          <div className="flex">
            <h1>MongoDB</h1>
          </div>
        </li>

      </ul>

     </div>

     <div className=" w-[70%] flex flex-col justify-center items-center h-screen">
      
    <p className="flex center break-words w-[90%] text-2xl  font-semibold">
    Hello! I'm currently pursuing a B.Tech in Computer Science and Engineering, with a keen interest in web development, particularly the MERN stack. I have hands-on experience with MongoDB for database management, Express.js and Node.js for building robust server-side applications, and React.js for creating dynamic and responsive user interfaces. My academic journey has equipped me with a solid foundation in software engineering principles, while my practical projects have honed my skills in developing full-stack applications, optimizing performance, and ensuring security. I'm passionate about leveraging technology to solve real-world problems and am eager to contribute my expertise to innovative projects.
    </p>
</div>
    </div>
    </div>
  )
}
