import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './compnonents/Sidebar/Sidebar'
import Header from './compnonents/Header/Header'
import UserDashboard from './compnonents/UserDashboard/UserDashboard'
import LandingPage from './compnonents/Landing/LandingPage'
export default function App() {
  localStorage.setItem("loading","true")
  const [isloadinpage,setislodingpage] = useState(localStorage.getItem("loading"))
  useEffect(()=>{
    setislodingpage(localStorage.getItem("loading"))
  })
    

  return (
    <div>
    {/* <Tabs /> */}
    <BrowserRouter>
     
    <div className="dashboard-container">
     {isloadinpage == "false" && < Sidebar style={{width:"25vw"}}/>}
    <div className="content">
     {isloadinpage == "false" &&  <Header/>}
    
      
      <Routes>
            <Route index element={<LandingPage/>} />
            <Route path='/dash' element={<UserDashboard />} />
            
      </Routes>
    </div>
  </div>
    </BrowserRouter>
  </div>
  )
}


