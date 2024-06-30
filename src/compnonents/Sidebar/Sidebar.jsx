// import React from 'react';
// import './Sidebar.css';
// import { useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoneyCheckAlt, faFileInvoiceDollar, faExchangeAlt, faUser, faBell, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {
//   const navigate = useNavigate(); 

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="sidebar">
//       <div style={{fontSize:"60px"}} className="sidebar-header">Zigma</div>
//       <div className="sidebar-item"  style={{margin:"50px 60px"}} onClick={() => handleNavigation('/dashboard')}>
//         <FontAwesomeIcon icon={faMoneyCheckAlt} /> <span style={{padding:"10px"}}>Dashboard</span>
//       </div>
//       <div className="sidebar-item"  style={{margin:"50px 60px"}}onClick={() => handleNavigation('/fundtransfer')}>
//         <FontAwesomeIcon icon={faFileInvoiceDollar} /> <span style={{padding:"10px"}}>Fund Transfer</span>
//       </div>
//       <div className="sidebar-item" style={{margin:"50px 60px"}} onClick={() => handleNavigation('/transactions')}>
//         <FontAwesomeIcon icon={faExchangeAlt} /> <span style={{padding:"10px"}}>Transactions</span>
//       </div>
//       <div className="sidebar-item" style={{margin:"50px 60px"}} onClick={() => handleNavigation('/recharge')}>
//         <FontAwesomeIcon icon={faUser} /> <span style={{padding:"10px"}}>Bill Pay</span>
//       </div>
//       <div className="sidebar-item" style={{margin:"50px 60px"}} onClick={() => handleNavigation('/profile')}>
//         <FontAwesomeIcon icon={faBell} /> <span style={{padding:"10px"}}>Profile</span>
//       </div>
//       <div className="sidebar-item" style={{margin:"50px 60px"}} onClick={() => handleNavigation('/cards')}>
//         <FontAwesomeIcon icon={faCreditCard} /> <span style={{padding:"10px"}}>Cards</span>
//       </div>
//       <div className="sidebar-item" style={{margin:"50px 60px"}} onClick={() => handleNavigation('/logout')}>
//         <FontAwesomeIcon icon={faSignOutAlt} /> <span style={{padding:"10px"}}>Logout</span>
//       </div>
//       <div className="sidebar-footer" style={{position:"absolute",bottom:"5vh"}}>
//         <div style={{marginTop:"25px",fontSize:"25px"}} className="address-header">Address</div>
//         <div style={{fontSize:"20px"}} className="address-content">
//           PTK Nagar,<br/>
//           Thiruvanmiyur, Chennai,<br/>
//         TamilNadu<br/>
//         India
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faFileInvoiceDollar, faExchangeAlt, faUser, faBell, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Zigma</div>
      <div className={`sidebar-item ${activePath === '/dashboard' ? 'active' : ''}`} onClick={() => handleNavigation('/dashboard')}>
        <FontAwesomeIcon icon={faMoneyCheckAlt} /> <span>Dashboard</span>
      </div>
      <div className={`sidebar-item ${activePath === '/fundtransfer' ? 'active' : ''}`} onClick={() => handleNavigation('/fundtransfer')}>
        <FontAwesomeIcon icon={faFileInvoiceDollar} /> <span>Fund Transfer</span>
      </div>
      <div className={`sidebar-item ${activePath === '/transactions' ? 'active' : ''}`} onClick={() => handleNavigation('/transactions')}>
        <FontAwesomeIcon icon={faExchangeAlt} /> <span>Transactions</span>
      </div>
      <div className={`sidebar-item ${activePath === '/recharge' ? 'active' : ''}`} onClick={() => handleNavigation('/recharge')}>
        <FontAwesomeIcon icon={faUser} /> <span>Bill Pay</span>
      </div>
      <div className={`sidebar-item ${activePath === '/profile' ? 'active' : ''}`} onClick={() => handleNavigation('/profile')}>
        <FontAwesomeIcon icon={faBell} /> <span>Profile</span>
      </div>
      <div className={`sidebar-item ${activePath === '/cards' ? 'active' : ''}`} onClick={() => handleNavigation('/cards')}>
        <FontAwesomeIcon icon={faCreditCard} /> <span>Cards</span>
      </div>
      <div className={`sidebar-item ${activePath === '/logout' ? 'active' : ''}`} onClick={() => handleNavigation('/logout')}>
        <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
      </div>
      <div className="sidebar-footer">
        <div className="address-header">Address</div>
        <div className="address-content">
          PTK Nagar,<br/>
          Thiruvanmiyur, Chennai,<br/>
          TamilNadu<br/>
          India
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
