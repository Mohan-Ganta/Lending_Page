import React, { useState } from 'react';
import './Fundtransfer.css';

const Fundtransfer = () => {
  const [step, setStep] = useState(1);

  const handleContinue = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCancel = () => {
    setStep(1);
  };
  const handleConfirmPay= ()=>{
    alert("done bhayya")
  }

  return (
    <div className="Funds-container">
      <hr className="horizontal-line" />
      <div className={`funds-form-wrapper ${step === 2 ? 'slide-left' : ''}`}>
        <form className="funds-form" onSubmit={handleContinue}>
          <div className="form-item">
            <label className='label' htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" placeholder="Enter Recipient Account Number" required />
          </div>
          <div className="form-item">
            <label className='label' htmlFor="amount">Amount</label>
            <input type="text" id="amount" placeholder="Enter Amount" required />
          </div>
          <div className="form-item">
            <button type="submit">Continue</button>
          </div>
        </form>
        {step === 2 && (
          <div className="details-card">
            <h3>Confirm Transaction Details</h3>
            <p>** OTP has been sent to your registered mail</p>
            <div className="form-item">
              <label className='label' htmlFor="accountHolder">Account Holder</label>
              <input type="text" id="accountHolder" value={"Koteswara rao"} disabled />
            </div>
            <div className="form-item">
              <label className='label' htmlFor="Amount">Amount</label>
              <input type="text" id="accountHolder" value={"Rs. 1000"} disabled />
            </div>
            <div className="form-item">
              <label className='label' htmlFor="otp">Enter OTP</label>
              <input type="text" id="otp" placeholder="Enter OTP" required />
            </div>
            <div className="form-item confirm-btns">
              <button type="button" onClick={handleConfirmPay}>Confirm</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fundtransfer;
