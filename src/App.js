import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './compnonents/Sidebar/Sidebar';
import Header from './compnonents/Header/Header';
import UserDashboard from './compnonents/UserDashboard/UserDashboard';
import Tabss from "./compnonents/MainComponents/TabSection/Tabss";
import Login from "./compnonents/MainComponents/Login/Login";
import Fundtransfer from "./compnonents/MainComponents/Fundtransfer/Fundtransfer";
import Transactions from "./compnonents/MainComponents/Transactions/Transactions";
import Recharge from './compnonents/MainComponents/Recharge/Recharge';
import Payroll from './compnonents/MainComponents/Payroll/Payroll';
import PasswordReset from "./compnonents/MainComponents/PasswordReset/PasswordReset";
import ForgotPassword from './compnonents/MainComponents/ForgotPassword/ForgotPassword';
import RegistrationConfromation from "./compnonents/MainComponents/ConfirmationComponents/RegistrationConfromation";

export default function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  useEffect(() => {
    // Assuming you have logic to determine loading state
    const isLoading = localStorage.getItem("loading") === "true";
    setIsLoadingPage(isLoading);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="dashboard-container">
          {!isLoadingPage && <Sidebar />}
          <div className="content">
            {!isLoadingPage && <Header />}
            <Routes>
              <Route path='/register' element={<Tabss />} />
              <Route path="/" element={<Login />} />
              <Route path='/dashboard' element={<UserDashboard />} />
              <Route path='/fundtransfer' element={<Fundtransfer />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/recharge' element={<Recharge />} />
              <Route path='/payroll' element={<Payroll />} />
              <Route path='/registrationsuccess' element={<RegistrationConfromation />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/resetpassword/:email' element={<PasswordReset />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
