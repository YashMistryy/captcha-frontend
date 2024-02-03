import React, { useState } from "react";
import { TextField, Button, Container, Grid, Paper } from "@mui/material";
import { axiosInstance } from "../utils/fetchUtitls";
import {useNavigate} from 'react-router-dom'
const TransactionForm = ({ planId }) => {
  const [transactionId, setTransactionId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const plan_id = planId;
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      transactionId,
      memberId,
      mobileNumber,
      plan_id,
    });
    // Add your logic for handling form data (e.g., send data to a server)
    axiosInstance
      .post("/api/select-plan/", {
        transactionId,
        memberId,
        mobileNumber,
        plan_id,
      })
      .then((res) => {
        console.log({ "select-plan response": res });
        navigate("/dashboard")
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="UPI Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Member ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
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
