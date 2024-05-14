
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


function App() {

  const name = "Prayansh singh Rajput";
  let [char, setChar] = useState(name);
  let [reverse, setReverse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (reverse) {
        setChar(prevChar => prevChar.slice(0, -1)); // remove the last character
      } 
    }, 500);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [reverse]);

  useEffect(() => {
    // Toggle reverse state when char length reaches 0 or name length
    if (char.length === 0 || char.length===name.length) {
      setReverse(prevReverse => !prevReverse);
    }
  }, [char]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverse) {
        // If not reversing, gradually reveal the full name
        let tem = name.substring(0, char.length + 1);
        setChar(tem);
      }
    }, 500);
  
    // Clean up the interval when the component unmounts or when `reverse` becomes `true`
    return () => clearInterval(interval);
  }, [reverse, char, name]);
  

  
let myimage="src/assets/backgound.jpg"


  return (
     <Scrollbar style={{ width: 1450, height: 1250 }}>
 
   
    <div className="  bg-cover bg-center overflow-hidden h-screen bg-[url('D:\React_class\my\src\assets\pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg')]   ">
{/* <img className="w-screen h-screen" src="src/assets/backgound.jpg" alt="" /> */}
    
    <Navbar></Navbar>

  

   <div className="bg-transparent flex justify-center font-bold text-zinc-50">
   <h1 >{char||"Software Developer"}</h1>
   </div>
    


   <Routes>

   <Route path='/' element={<Home></Home>}></Route>
    <Route path='/project' element={<Project></Project>}></Route>
    <Route path='/about' element={ <About></About>}></Route>
    <Route path='/contect' element={<Contect></Contect>}></Route>
   
  </Routes>
    </div>
    
     </Scrollbar>
  );
}

export default App;

