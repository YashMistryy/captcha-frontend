import React, { useState ,useRef} from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { axiosInstance } from "../utils/fetchUtitls";
import { useNavigate } from "react-router-dom";
import PhonePeLogo from '../images/phonepe_logo.png'
import PaytmLogo from '../images/paytm_logo.png'
import GpayLogo from '../images/gpay_logo.png'
import {merchantId,merchantName,currency,note,purpose,minAddFunds} from '../utils/constants'


const TransactionForm = ({amount,setAmount,handleUpiAppPayment,copyToClipboard} ) => {
  // const [memberId, setMemberId] = useState("");
  //const [mobileNumber, setMobileNumber] = useState("");
  //const [amount, setAmount] = useState("");
  //const [refferal_id, setRefferalId] = useState("");
  //const [transactionId, setTransactionId] = useState("");
  const icon_style = {
    width:"60px",
}
  const [selectedImage, setSelectedImage] = useState(null);
  const textRef = useRef(null);
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      amount,
    });
    // Add your logic for handling form data (e.g., send data to a server)

    // .post("/api/select-plan/", { // this is not longer required
    axiosInstance
      .post("/api/add-funds/", {
        amount,
        selectedImage
      },
      {headers: {
        'Content-Type': 'multipart/form-data'
      }}
      )
      .then((res) => {
        debugger;
        console.log({ "select-plan response": res });
        alert("Your Funds Request has been registerd with us and It will be processed within 24 Hours.")
        navigate("/user-wallet");
        window.location.reload()
      })
      .catch((err) => {
        console.log({ "select-plan error": err });
      });
  };

  return (
    <Container component="main" maxWidth="xs" className="transc-form">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
          

         {/*     <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="UPI Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
              />
           
             </Grid>
           */}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Amount"
                value={amount}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} // Only accepts numbers
                InputLabelProps={{ shrink: !!amount }} 
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </Grid>

<div style={{ display: 'flex', alignItems: 'center',justifyContent: 'space-around', flexWrap: 'wrap' ,marginLeft:"16px" ,marginTop:"16px"}}>
  <div style={{ fontSize:"14px",  padding: '10px 10px', backgroundColor: '#f0f0f0', color: '#333', cursor: 'pointer', borderRadius: '5px', marginRight: '6px' }} onClick={() => setAmount(250)}>₹250</div>
  <div style={{ fontSize:"14px", padding: '10px 10px', backgroundColor: '#f0f0f0', color: '#333', cursor: 'pointer', borderRadius: '5px', marginRight: '6px' }} onClick={() => setAmount(500)}>₹500</div>
  <div style={{ fontSize:"14px", padding: '10px 10px', backgroundColor: '#f0f0f0', color: '#333', cursor: 'pointer', borderRadius: '5px', marginRight: '6px' }} onClick={() => setAmount(2000)}>₹2000</div>
  <div style={{ fontSize:"14px", padding: '10px 10px', backgroundColor: '#f0f0f0', color: '#333', cursor: 'pointer', borderRadius: '5px' }} onClick={() => setAmount(5000)}>₹5000</div>
</div>



<div className="wrapper" >



    <div style={{display:"flex",justifyContent:"space-between",width:"100%",padding:"10px",border: '2px solid #CCCCCC',borderRadius: '8px',marginTop:"10px",marginBottom:"15px" }} >
          <img style={icon_style} src={PhonePeLogo} alt="phonePe" onClick = {()=>handleUpiAppPayment('phonepe')} />
          <img  style={icon_style}   src={PaytmLogo} alt="paytm" onClick = {()=>handleUpiAppPayment('paytm')} />
          <img  style={icon_style}  src={GpayLogo} alt="Gpay" onClick = {()=>handleUpiAppPayment('gpay')} />
          </div>

    <span className="info">Use above  UPI Apps OR use below UPI ID For Payment   </span>


        <div className = "upi-wrapper">
           <span className="number" ref={textRef}>{merchantId}</span> <button onClick={copyToClipboard}>Copy UPI-ID</button>
        </div>


      <span className="info">After Payment Please Share the tranaction Screenshot to Confirm the Transaction </span>
      </div>







            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Refferal ID"
                value={refferal_id}
                onChange={(e) => setRefferalId(e.target.value)}
                required
              />
            </Grid> 

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile Number"
                value={mobileNumber}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} // Only accepts numbers
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </Grid>
           */}

            <Grid item xs={12}>
              <div
                style={{
                  border: "1px solid #D3D3D3",
                  borderRadius: "3px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center !important",
                }}
              >
                <Typography
                  variant="body1"
                  component="label"
                  htmlFor="fileInput"
                  style={{
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
                  Payment ScreenShot
                </Typography>
                <input
                  style={{
                    textAlign: "center",
                    maxWidth: "200px",
                  }}
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TransactionForm;
