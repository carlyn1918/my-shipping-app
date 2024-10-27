// PaymentDetailsForm.jsx
import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const PaymentDetailsForm = ({ data, onChange, onBack, onNext }) => {
  const handlePaymentMethodChange = (method) => {
    onChange({ method, codAmount: method === 'COD' ? data.codAmount : '' });
  };

  const handleCODAmountChange = (event) => {
    onChange({ codAmount: event.target.value });
  };

  return (
    <div>
      <Typography variant="h6">Select Payment Method</Typography>
      <Button
        variant={data.method === 'CASH' ? 'contained' : 'outlined'}
        onClick={() => handlePaymentMethodChange('CASH')}
      >
        Cash
      </Button>
      <Button
        variant={data.method === 'CARD' ? 'contained' : 'outlined'}
        onClick={() => handlePaymentMethodChange('CARD')}
      >
        Card
      </Button>
      <Button
        variant={data.method === 'COD' ? 'contained' : 'outlined'}
        onClick={() => handlePaymentMethodChange('COD')}
      >
        COD
      </Button>

      {data.method === 'COD' && (
        <TextField
          label="COD Amount"
          type="number"
          placeholder="Amount in PHP"
          value={data.codAmount}
          onChange={handleCODAmountChange}
          fullWidth
        />
      )}
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default PaymentDetailsForm;
