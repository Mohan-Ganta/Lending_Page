import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './compnonents/Sidebar/Sidebar'
import Header from './compnonents/Header/Header'
import UserDashboard from './compnonents/UserDashboard/UserDashboard'
import LandingPage from './compnonents/Landing/LandingPage'
import Tabss from "./compnonents/MainComponents/TabSection/Tabss"
import Login from "./compnonents/MainComponents/Login/Login"
import Fundtransfer from "./compnonents/MainComponents/Fundtransfer/Fundtransfer"
import Transactions from "./compnonents/MainComponents/Transactions/Transactions"
export default function App() {
  localStorage.setItem("loading","true")
  const [isloadinpage,setislodingpage] = useState(localStorage.setItem("loading","true"))
  useEffect(()=>{
    setislodingpage(localStorage.getItem("loading"))
  })

  return (
    <div>
    {/* <Tabs /> */}
    <BrowserRouter>
     
    <div className="dashboard-container">
     {isloadinpage === "false" && < Sidebar />}
    <div className="content">
     {isloadinpage === "false" &&  <Header/>}
      
      <Routes>
            <Route index element={<LandingPage/>} />
            <Route path='/register' element={<Tabss/>} />
            <Route path="/login" element={<Login />} />
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/fundtransfer' element={< Fundtransfer/>} />
            <Route path='/transactions' element={<UserDashboard />} />
            <Route path='/profile' element={<UserDashboard />} />
            <Route path='/recharge' element={<UserDashboard />} />
            
      </Routes>
    </div>
  </div>
    </BrowserRouter>
  </div>
  )
}


