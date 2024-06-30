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
import Recharge from './compnonents/MainComponents/Recharge/Recharge'
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
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/recharge' element={<Recharge />} />
            
      </Routes>
    </div>
  </div>
    </BrowserRouter>
  </div>
  )
}


