// ConfirmationForm.jsx
import React from 'react';
import { Typography, Button } from '@mui/material';

const ConfirmationForm = ({ data, onBack, onConfirm }) => {
  return (
    <div>
      <Typography variant="h6">Confirm Your Details</Typography>

      <Typography variant="subtitle1">Sender Information</Typography>
      <div>Address: {data.sender.address}</div>
      <div>City: {data.sender.city}</div>
      <div>Province: {data.sender.province}</div>

      <Typography variant="subtitle1">Receiver Information</Typography>
      <div>Address: {data.receiver.address}</div>
      <div>City: {data.receiver.city}</div>
      <div>Province: {data.receiver.province}</div>

      {data.stopovers.length > 0 && (
        <>
          <Typography variant="subtitle1">Stopover Information</Typography>
          {data.stopovers.map((stop, index) => (
            <div key={index}>
              <div>Stopover {index + 1} Address: {stop.address}</div>
              <div>City: {stop.city}</div>
              <div>Province: {stop.province}</div>
            </div>
          ))}
        </>
      )}

      <Typography variant="subtitle1">Parcel Information</Typography>
      <div>Weight: {data.parcel.weight} KG</div>
      <div>Vehicle Type: {data.parcel.vehicleType}</div>

      <Typography variant="subtitle1">Payment Details</Typography>
      <div>Method: {data.payment.method}</div>
      {data.payment.method === 'COD' && <div>COD Amount: PHP {data.payment.codAmount}</div>}

      <Button onClick={onBack}>Back</Button>
      <Button onClick={onConfirm} variant="contained" color="primary">
        Confirm
      </Button>
    </div>
  );
};

export default ConfirmationForm;
