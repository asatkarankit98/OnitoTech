
import './App.css';
import React, { useEffect } from "react";
import { useState } from "react"

export default function App() {
  const [paymentList, setPayment] = useState([]);
  const [udate, setUdate] = useState("");
  const [uamount, setUamount] = useState("");
  const [paymode, setPaymode] = useState("Cash");
  const [remark, setRemark] = useState("");
  function submitData() {
    if (udate===''||uamount===''||paymode===''||remark==='') {
      alert("enter valide data")
    }
    else{
      let payment = { udate: udate, uamount: uamount, paymode: paymode, remark: remark };
      setPayment([...paymentList, payment]);
      clearData();
    }
  }
  function clearData() {
    setUdate("");
    setUamount("");
    setPaymode("");
    setRemark("");
  }

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>
        <div className="receipt_details_form">
          <h3>
            <u>Receipt Details</u>
          </h3>
          <table className='col-12'>
            <tr>
              <td>
                <label className="receipt_details_label">
                  Date<span className='required_mark'>*</span>
                </label>
              </td>
              <td>
                <input
                  value={udate}
                  className="input_date col-5"
                  placeholder="Enter Date"
                  onChange={(event) => setUdate(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="receipt_details_label text-">
                  Amount<span className='required_mark'>*</span>
                </label>
              </td>
              <td>
                <input
                  value={uamount}
                  className="input_amount col-12"
                  placeholder="Enter Amount (in INR)"
                  onChange={(event) => setUamount(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="receipt_details_label">
                  Payment Mode<span className='required_mark'>*</span>
                </label>
              </td>
              <td>
                <select
                  value={paymode}
                  className="col-8"
                  placeholder=""
                  id="selects"
                  onChange={(event) => setPaymode(event.target.value)}
                >
                  <option value="cash">Cash</option>
                  <option value="upi">UPI</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label className="receipt_details_label">
                  Remark
                </label>
              </td>
              <td>
                <input
                  value={remark}
                  className="input_remark col-12"
                  placeholder="Enter remark"
                  onChange={(event) => setRemark(event.target.value)}
                />
              </td>
            </tr>
            
          </table>
          <div className='col-12 mt-3 row justify-content-end'>
            <div className='col-6 row justify-content-around'>
              <button className='col-4 form_btn cancel_btn' onClick={clearData}>
                CANCEL<p><u>(ESC)</u></p>
              </button>
              <button className='col-4 form_btn submit_btn' onClick={submitData}>
                SUBMIT
                <p>
                  <u>(S)</u>
                </p>
              </button>
            </div>
          </div>
          <div className='p-3'>
            <table className='w-100'>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Mode</th>
                <th>Remark</th>
              </tr>
              {paymentList.map((val, key) => {
                return (
                  <tr key={"key"}>
                    <td>{val.udate}</td>
                    <td>{val.uamount}</td>
                    <td>{val.paymode}</td>
                    <td>{val.remark}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}