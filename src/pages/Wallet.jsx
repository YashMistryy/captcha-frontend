// contain all money related details and functionality here
import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { FaCoins } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const WithDrawPopupForm = ({ onSubmit, setWdrPopupOpen }) => {
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [bankAccountId, setBankAccountId] = useState("");

  const onSubmitPopup = () => {
    // Perform actions with the submitted data
    console.log("Submitted Data:", { amount, upiId, bankAccountId });

    // Pass the submitted data to the parent component
    onSubmit({ amount, upiId, bankAccountId });
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Withdraw Amount
        </div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          UPI ID:
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </label>
        <label>
          Bank Account ID:
          <input
            type="text"
            value={bankAccountId}
            onChange={(e) => setBankAccountId(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input type="text" value={todayDate} readOnly />
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0px",
          }}
        >
          <button onClick={onSubmitPopup}>Submit</button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setWdrPopupOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const WalletPage = () => {
  const { currentUserData } = useContext(UserContext);
  const [isWdrPopupOpen, setWdrPopupOpen] = useState(true);
  const onWtdrSubmit = ({ amount, upiId, bankAccountId }) => {
    // Handle the submitted data
    console.log("Form Data in App:", { amount, upiId, bankAccountId });

    // Perform any other actions based on the submitted data
  };
  return (
    <div className="user-profile-main">
      {isWdrPopupOpen && (
        <WithDrawPopupForm
          onSubmit={onWtdrSubmit}
          setWdrPopupOpen={setWdrPopupOpen}
        />
      )}
      <div className="header">
        <FaCoins className="icon1" />
        <span>Wallet Details </span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      <div className="user-info">
        <div className="tab">
          <span className="label">Account Balance</span>
          <span className="value">
            ₹{currentUserData ? currentUserData.data.current_balance : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Active Plan</span>
          <span className="value">
            {currentUserData ? currentUserData.data.plan_name : ""}
          </span>
        </div>
        <div className="tab">
          <span className="label">Total Captchas Filled</span>
          <span className="value">
            {currentUserData ? currentUserData.data.total_captcha_filled : ""}
          </span>
        </div>
      </div>

      <div className="wallet-btns">
        <div className="add-main">
          <IoIosAddCircle className="btns" />
          <span>Add Funds</span>
        </div>
        <div className="wtdr-main">
          <FaMoneyBillTrendUp className="btns" />
          <span>Withdraw Funds</span>
        </div>
      </div>

      <div className="header">
        <MdOutlinePayment className="icon1" />
        <span>Payment History</span>
      </div>
      <div className="heading-table">
        <span>Id</span>
        <span>Account</span>
        <span>Status</span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      {/* include following details in userContext */}
      {currentUserData ? (
        <div className="payment_history_comp">
          {currentUserData.data.payment_history.map((record) => (
            <div className="payment_row" key={record.id}>
              <span>{record.id}</span>
              <span>{record.amount}</span>
              <span>{record.status}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: "teal" }}>No records were found!</div>
      )}

      <div className="header">
        <BiMoneyWithdraw className="icon1" />
        <span>Withdraw History</span>
      </div>
      <div className="heading-table">
        <span>Id</span>
        <span>Account</span>
        <span>Status</span>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "2px dotted black",
          width: "100%", // Adjust the width as needed
          margin: "10px 0", // Adjust margin as needed
        }}
      />
      {currentUserData ? (
        <div className="payment_history_comp">
          {currentUserData.data.payment_history.map((record) => (
            <div className="payment_row" key={record.id}>
              <span>{record.id}</span>
              <span>{record.amount}</span>
              <span>{record.status}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: "teal" }}>No records were found!</div>
      )}
    </div>
  );
};

export default WalletPage;
