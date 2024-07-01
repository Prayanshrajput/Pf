
import React, { useEffect, useState } from 'react';
import { Navbar } from './component/Navbar';
import './All.css'
import '../index.css'
import { Route, Routes } from 'react-router-dom';
import { Project } from './component/Project';
import { About } from './component/About';
import { Contect } from './component/Contect';
import { Home } from './component/Home';
import { Scrollbar } from 'react-scrollbars-custom';
import { Listfornav } from './component/Listfornav';


function App() {

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(2500);


  return (
//      <Scrollbar className=" bg-[url('Pf/src/assets/try.png')] overflow-x-hidden" style={{ width: viewportWidth, height:viewportHeight }}>
 
   
//     <div>
// {/* <img className="w-screen h-screen" src="src/assets/backgound.jpg" alt="" /> */}
    
//     <Navbar></Navbar>
//    {/* <Routes>

//    <Route path='/' element={<Home></Home>}></Route>
//     <Route path='/project' element={<Project></Project>}></Route>
//     <Route path='/about' element={ <About></About>}></Route>
//     <Route path='/contect' element={<Contect></Contect>}></Route>
   
//   </Routes> */}

//      <Home  ></Home>
//     <About></About>
//     <Contect></Contect>
//     <Project></Project>

//     </div>
    
    

//      </Scrollbar>
 <div className="flex flex-col ">
    <Navbar></Navbar>
    <Home  ></Home>
     <About></About>
   <Contect></Contect>
    <Project></Project>
 </div>

  );
}

export default App;

