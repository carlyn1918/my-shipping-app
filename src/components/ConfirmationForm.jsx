// ConfirmationForm.jsx
import React from "react";
import { Typography, Button, Card, CardContent } from "@mui/material";
import { RootContainer, Title, StyledFormControl } from "./styles"; // Ensure you have these styled components

const ConfirmationForm = ({ data, onBack, onConfirm }) => {
  return (
    <RootContainer>
      <Title variant="h6">Confirm Your Details</Title>

      {/* Sender Information */}
      <StyledFormControl fullWidth margin="normal">
        <Typography variant="subtitle1">Sender Location</Typography>
        <div>
          {data.sender.region}, {data.sender.city}
        </div>
      </StyledFormControl>

      {/* Stopover Information */}
      {data.stopovers.length > 0 && (
        <StyledFormControl fullWidth margin="normal">
          <Typography variant="subtitle1">Stopover Information</Typography>
          {data.stopovers.map((stop, index) => (
            <Card key={index} style={{ margin: "10px 0" }}>
              <CardContent>
                <Typography variant="subtitle2">Stopover {index + 1}</Typography>
                
                <div>Region: {stop.region}</div>
                <div>City: {stop.city}</div>
              </CardContent>
            </Card>
          ))}
        </StyledFormControl>
      )}

      {/* Receiver Information */}
      <StyledFormControl fullWidth margin="normal">
        <Typography variant="subtitle1">Receiver Location</Typography>
        <div>{data.receiver.region}, {data.receiver.city}</div>
      </StyledFormControl>

      {/* Parcel Information */}
      <StyledFormControl fullWidth margin="normal">
        <Typography variant="subtitle1">Parcel Information</Typography>
        <div>Weight: {data.parcel.weight} KG</div>
        <div>Vehicle Type: {data.parcel.vehicleType}</div>
      </StyledFormControl>

      {/* Payment Details */}
      <StyledFormControl fullWidth margin="normal">
        <Typography variant="subtitle1">Payment Details</Typography>
        <div>Method: {data.payment.method}</div>
        {data.payment.method === "COD" && (
          <div>COD Amount: PHP {data.payment.codAmount}</div>
        )}
      </StyledFormControl>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </div>
    </RootContainer>
  );
};

export default ConfirmationForm;
