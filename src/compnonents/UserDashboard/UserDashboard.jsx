import React from "react";
import "./UserDashboard.css";
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
  localStorage.setItem("loading", "false");
  const availableBalance = 1000;

  const navigate = useNavigate(); // Hook for navigation
  const location = useLocation();
  const { state } = location;
  const { email, name, subject } = state || {};
  console.log(email);
  console.log(name);
  console.log(subject);
  console.log("State in TeacherDashboard:", { email, name, subject });

  const handleViewTeachers = () => {
    navigate("/Dashboard/ViewTeachers", { state: { email, name, subject } });
  };

  const handleAddStudent = () => {
    navigate("/Dashboard/AddStudent", { state: { email, name, subject } });
  };

  const handleAddAdmin = () => {
    navigate("/register/RegisterAdmin", { state: { email, name, subject } });
  };

  const handleViewStudents = () => {
    navigate("/Dashboard/ViewStudents", { state: { email, name, subject } });
  };

  const handleAddTeachers = () => {
    navigate("/register/teacher", { state: { email, name, subject } });
  };

  const getProgressBarColor = (amount) => {
    if (amount < 1000) return "red";
    if (amount < 5000) return "orange";
    return "green";
  };

  return (
    <div className="userdashboard-main-container">
      <hr className="horizontal-line" />
      <div className="account-info">
        <div style={{ marginLeft: "25px" }}>
          <p className="">Date: [Date]</p>
          <p>AccountID: [AccountID]</p>
          <p>Mobile: [mobile]</p>
        </div>
        <div className="amount">
          <p >Available Balance :</p>
          <div>
            <h1>
              {" "}
              <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
              {availableBalance.toLocaleString()}
            </h1>
          </div>
        </div>
      </div>
      <div className="quick-actions">
        <div className="quick-action">
          <FontAwesomeIcon
            style={{ fontSize: "45px" }}
            icon={faMoneyCheckAlt}
          />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon
            style={{ fontSize: "45px" }}
            icon={faFileInvoiceDollar}
          />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "45px" }} icon={faExchangeAlt} />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "45px" }} icon={faUser} />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "45px" }} icon={faBell} />
        </div>
        <div className="quick-action">
          <FontAwesomeIcon style={{ fontSize: "45px" }} icon={faCreditCard} />
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
