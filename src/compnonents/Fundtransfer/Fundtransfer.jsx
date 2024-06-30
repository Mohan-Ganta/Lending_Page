import React, { useEffect, useState } from 'react'
import { Form, Input, Pagination,Button } from 'antd';
import'./Fundtransfer.css';
const  Fundtransfer = ()=> {
  useEffect(()=>{
    localStorage.setItem("loading", "false");
  })
  return (
    
    <div className="Funds-container">
      <hr className="horizontal-line" />
       
      <Form layout="vertical">
        <Form.Item className='label' label="Account Number">
          <Input placeholder='Enter Recipient Account Number' required />
        </Form.Item>
        <Form.Item className='label' label="IFSC Code">
          <Input placeholder='Enter IFSC Code' required />
        </Form.Item>
        <Form.Item className='label' label="Amount">
          <Input placeholder='Enter Amount' required />
        </Form.Item>
      
      <Form.Item><button> Continue</button></Form.Item>
      </Form>
      
    </div>
  )
}

export default Fundtransfer