import React, { useEffect } from "react";
import "./UserDashboard.css";
import CountUp from 'react-countup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckAlt,
  faFileInvoiceDollar,
  faExchangeAlt,
  faUser,
  faBell,
  faCreditCard,
  faSignOutAlt,
  faEnvelope,
  faCog,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";

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
  useEffect(()=>{
    localStorage.setItem("loading", "false");
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
          <p className="info-card">Date: [Date]</p>
          <p>AccountID: [AccountID]</p>
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
