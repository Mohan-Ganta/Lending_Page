import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import CountUp from 'react-countup';
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faFileInvoiceDollar,
  faExchangeAlt,
  faUser,
  faBell,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

import {useLocation } from "react-router-dom";

const transactions = [
  {
    id: 1,
    senderAccountID: "6231415",
    receiverAccountID: "10140715",
    amount: "1,000.00",
    transactionType: "Withdraw",
    status: "Success",
    dateCreated: "2021-07-14 15:56:12",
  },
  {
    id: 2,
    senderAccountID: "6231415",
    receiverAccountID: "10140715",
    amount: "1,000.00",
    transactionType: "Deposit",
    status: "Success",
    dateCreated: "2021-07-14 15:55:54",
  },
  {
    id: 3,
    senderAccountID: "6231415",
    receiverAccountID: "10140715",
    amount: "1,000.00",
    transactionType: "Withdraw",
    status: "Success",
    dateCreated: "2021-07-14 15:56:12",
  },
];
const UserDashboard = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(()=>{
    localStorage.setItem("loading", "false");
        const now = new Date();
    const formattedDate = format(now, "dd MMMM, EEEE");
    setCurrentDate(formattedDate);
 
  })
  const availableBalance = 1000;

  const location = useLocation();
  const { state } = location;
  const { email, name, subject } = state || {};
  console.log(email);
  console.log(name);
  console.log(subject);
  console.log("State in TeacherDashboard:", { email, name, subject });



  return (
    <div className="userdashboard-main-container">
      <hr className="horizontal-line" />
      <div className="account-info">
        <div>
          <p className="info-card">{currentDate}</p>
          <p>AccountID: {localStorage.getItem("")}</p>
          <p>Mobile: [mobile]</p>
        </div>
        <div className="in-out-amount-cards">
        <div  className="account-info-card">
        <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div className="dots bg-green"></div> In Amount</p>
          <div >
            <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
            <span style={{fontSize:"35px"}}><CountUp start={0} end={896} duration={1.6} separator="," /></span>
          </div>
          
        </div>
        <div className="account-info-card">
        <p style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div className="dots bg-yellow"></div> Out Amount</p>
        <div >
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span style={{fontSize:"35px"}}><CountUp start={0} end={2456} duration={2} separator="," /></span>
          </div>
          
        </div>
        </div>
        
        <div className="balance-info-card ">
          <p>Avl Balance :</p>
          <div>
          <div >
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span style={{fontSize:"32px"}}> <strong><CountUp start={0} end={125342} duration={3} separator="," /></strong></span>
          </div>
          </div>
        </div>
      </div>
      <div className="quick-actions">
        <div className="quick-action">
          <FontAwesomeIcon
            style={{ fontSize: "30px" }}
            icon={faMoneyCheckAlt}
          />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon
            style={{ fontSize: "30px" }}
            icon={faFileInvoiceDollar}
          />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faExchangeAlt} />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faUser} />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faBell} />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faCreditCard} />
        </div>
      </div>
      <div className="recent-transactions">
        <h2>Recent Transactions</h2>
        <table className="recent-transactions">
          <thead>
            <tr>
              <th>Tnx ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Tnx Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.senderAccountID}</td>
                <td>{transaction.receiverAccountID}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.transactionType}</td>
                <td className="transaction">
                  <div
                    className={`dot-${
                      transaction.status.toLowerCase() === "success"
                        ? "red"
                        : "yellow"
                    }`}
                  ></div>
                  {transaction.status}
                </td>
                <td>{transaction.dateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;


// import React, { useEffect, useState } from "react";
// import "./UserDashboard.css";
// import CountUp from "react-countup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyCheckAlt,
//   faFileInvoiceDollar,
//   faExchangeAlt,
//   faUser,
//   faBell,
//   faCreditCard,
//   faSignOutAlt,
//   faEnvelope,
//   faCog,
//   faQuestionCircle,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { format } from "date-fns";
// import { useNavigate, useLocation } from "react-router-dom";
// import Header from "../Header/Header";

// const transactions = [
//   {
//     id: 1,
//     senderAccountID: "6231415",
//     receiverAccountID: "10140715",
//     amount: "1,000.00",
//     transactionType: "Withdraw",
//     status: "Success",
//     dateCreated: "2021-07-14 15:56:12",
//   },
//   {
//     id: 2,
//     senderAccountID: "6231415",
//     receiverAccountID: "10140715",
//     amount: "1,000.00",
//     transactionType: "Deposit",
//     status: "Success",
//     dateCreated: "2021-07-14 15:55:54",
//   },
//   {
//     id: 3,
//     senderAccountID: "6231415",
//     receiverAccountID: "10140715",
//     amount: "1,000.00",
//     transactionType: "Withdraw",
//     status: "Success",
//     dateCreated: "2021-07-14 15:56:12",
//   },
// ];

// const UserDashboard = () => {
//   const [inAmount, setInAmount] = useState(0);
//   const [outAmount, setOutAmount] = useState(0);
//   const [availableBalance, setAvailableBalance] = useState(0);
//   const [currentDate, setCurrentDate] = useState("");
//   const location = useLocation();
//   const { state } = location;
//   const { email, name, subject } = state || {};

//   useEffect(() => {
//     localStorage.setItem("loading", "false");

//     // Extracting account holder data from localStorage
//     const accountHolder = JSON.parse(localStorage.getItem("accountholder"));
//     if (accountHolder) {
//       setAvailableBalance(accountHolder.balance);
//       const senderAccountId = accountHolder.accountId;

//       // axios
//       //   .get(`http://localhost:5000/transactions/summary/${senderAccountId}`)
//       //   .then((response) => {
//       //     const data = response.data;
//       //     setInAmount(data.totalCreditedAmount);
//       //     setOutAmount(data.totalDebitedAmount);
//       //   })
//       //   .catch((error) => {
//       //     console.error("Error fetching transaction summary:", error);
//       //   });
      
      
//     }
//     setInAmount(590)
//       setOutAmount(8994)

//     const now = new Date();
//     const formattedDate = format(now, "dd MMMM, EEEE");
//     setCurrentDate(formattedDate);
//   }, []);

//   return (
//     <div className="userdashboard-main-container">
//       <hr className="horizontal-line" />
//       <div className="account-info">
//         <div>
//           <p className="info-card">Date: {currentDate}</p>
//           <p>AccountID: [AccountID]</p>
//           <p>Mobile: [mobile]</p>
//         </div>
//         <div className="in-out-amount-cards">
//           <div className="account-info-card">
//             <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <div className="dots bg-green"></div> In Amount
//             </p>
//             <div>
//               <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
//               <span style={{ fontSize: "35px" }}>
//                 <CountUp start={0} end={inAmount} duration={1.6} separator="," />
//               </span>
//             </div>
//           </div>
//           <div className="account-info-card">
//             <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//               <div className="dots bg-yellow"></div> Out Amount
//             </p>
//             <div>
//               <i className="fa-solid fa-indian-rupee-sign"></i>
//               <span style={{ fontSize: "35px" }}>
//                 <CountUp start={0} end={outAmount} duration={2} separator="," />
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="balance-info-card ">
//           <p>Avl Balance :</p>
//           <div>
//             <div>
//               <i className="fa-solid fa-indian-rupee-sign"></i>
//               <span style={{ fontSize: "32px" }}>
//                 <strong>
//                   <CountUp start={0} end={availableBalance} duration={3} separator="," />
//                 </strong>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="quick-actions">
//         <div className="quick-action">
//           <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faMoneyCheckAlt} />
//         </div>
//         <div className="quick-action">
//           <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faFileInvoiceDollar} />
//         </div>
//         <div className="quick-action">
//           <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faExchangeAlt} />
//         </div>
//         <div className="quick-action">
//           <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faUser} />
//         </div>
//         <div className="quick-action">
//           <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faBell} />
//         </div>
//         <div className="quick-action">
//           <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faCreditCard} />
//         </div>
//       </div>
//       <div className="recent-transactions">
//         <h2>Recent Transactions</h2>
//         <table className="recent-transactions">
//           <thead>
//             <tr>
//               <th>Tnx ID</th>
//               <th>Sender</th>
//               <th>Receiver</th>
//               <th>Amount</th>
//               <th>Tnx Type</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction) => (
//               <tr key={transaction.id}>
//                 <td>{transaction.id}</td>
//                 <td>{transaction.senderAccountID}</td>
//                 <td>{transaction.receiverAccountID}</td>
//                 <td>{transaction.amount}</td>
//                 <td>{transaction.transactionType}</td>
//                 <td className="transaction">
//                   <div
//                     className={`dot-${
//                       transaction.status.toLowerCase() === "success" ? "red" : "yellow"
//                     }`}
//                   ></div>
//                   {transaction.status}
//                 </td>
//                 <td>{transaction.dateCreated}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
