import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/fetchUtitls";
import QrCode from "../images/demo_qr.png";
import All_upi_icons from "../images/all_upi_icons.png"
import TransactionForm from "../components/Trasaction";

const AddFunds = () => {
  const navigate = useNavigate();
  // const [planData, setPlanData] = useState({
  //   planName: "",
  //   planPrice: "",
  //   planReferrals: "",
  //   planDailyLimit: "",
  // });
  // const { paramValue } = useParams(); // if not found then renavigate to plans page
  // console.log({paramValue});
  // if (!paramValue) {
  //   console.log("no plans selected");
  //   navigate("/plans");
  // }


  // useEffect(() => {
  //   // call the backend to provide plan details
  //   axiosInstance
  //     .get(`api/plan-details?planId=${paramValue}`, { planId: paramValue })
  //     .then((res) => {
  //       //we got to load this page with selected plan details here
  //       setPlanData(res.data);
  //     })
  //     .catch((err) => {
  //       debugger
  //       console.log({ err });
  //     });
  // }, [paramValue]);
  // console.log({ planData });

  return (
    <div className="purchase-plan">
      <div className="wrapper">
        <span className="number">+91-9999966666</span>
        <img className="qr-img" src={QrCode} alt="QrImage" />
        <span className="info">Use Any UPI to scan above Qr code and complete the payment </span>
        <img className="upi-img" src={All_upi_icons} alt="pay with any up1 :)"/>
      </div>
      <div className="user-form">
        <TransactionForm />
      </div>
    </div>
  );
};

export default AddFunds;
