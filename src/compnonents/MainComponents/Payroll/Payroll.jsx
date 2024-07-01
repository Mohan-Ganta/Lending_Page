import React, { useState } from 'react';
import './payroll.css'; // Ensure you have similar styling as FundTransfer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faKey, faFileUpload, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import * as XLSX from 'xlsx';
import axios from 'axios';

const Payroll = () => {
  const [organisationAccountNo, setOrganisationAccountNo] = useState('');
  const [mpin, setMpin] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [otp, setOtp] = useState('');
  const [file, setFile] = useState(null);
  const [slideLeft, setSlideLeft] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(firstSheet);
      
      const totalSalary = rows.reduce((acc, row) => acc + (row.Salary || 0), 0);
      setTotalAmount(totalSalary);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleContinue = () => {
    setSlideLeft(true);
  };

  const handleReleaseFunds = () => {
    // Implement the release funds functionality here
    axios.post('/api/release-funds', {
      organisationAccountNo,
      mpin,
      totalAmount,
      otp,
      file
    })
    .then(response => {
      console.log('Funds released successfully:', response.data);
    })
    .catch(error => {
      console.error('Error releasing funds:', error);
    });
  };

  return (
    <div className="Payroll-container">
      <hr className="horizontal-line" />
      <div className={`payroll-form-wrapper ${slideLeft ? 'slide-left' : ''}`}>
        <div className="payroll-form">
          <h2>Payroll</h2>
          <div className="form-item">
            <label className="label" htmlFor="organisationAccountNo">
              <FontAwesomeIcon icon={faBuilding} /> Organisation Account No
            </label>
            <input
              type="text"
              id="organisationAccountNo"
              value={organisationAccountNo}
              onChange={(e) => setOrganisationAccountNo(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label className="label" htmlFor="mpin">
              <FontAwesomeIcon icon={faKey} /> MPIN
            </label>
            <input
              type="password"
              id="mpin"
              value={mpin}
              onChange={(e) => setMpin(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label className="label" htmlFor="fileUpload">
              <FontAwesomeIcon icon={faFileUpload} /> Upload Excel Sheet
            </label>
            <input
              type="file"
              id="fileUpload"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
            />
          </div>
          <button type="button" onClick={handleContinue}>
            Continue
          </button>
        </div>
        <div className="details-card">
          <h3>Details</h3>
          <p>Organisation Name: <strong>VTS Company</strong></p>
          <p>Total Amount: 
            <span style={{ fontSize: '32px', fontWeight: 'bold' }}>
              <CountUp start={0} end={totalAmount} duration={1.6} separator="," />
            </span>
          </p>
          <div className="form-item">
            <label className="label" htmlFor="otp">
              <FontAwesomeIcon icon={faCheckCircle} /> OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className="confirm-btns">
            <button type="button" onClick={handleReleaseFunds}>
              Release Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
