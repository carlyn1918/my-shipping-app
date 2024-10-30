// PaymentDetailsForm.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Typography, FormHelperText } from '@mui/material';
import { RootContainer, Title, StyledFormControl, StyledButton } from './styles'; // Import shared styled components

const PaymentDetailsForm = ({ data, onChange, onBack, onNext }) => {
  const [codAmountError, setCodAmountError] = useState(false);

  const handlePaymentMethodChange = (method) => {
    onChange({ method, codAmount: method === 'COD' ? data.codAmount : '' });
    if (method !== 'COD') {
      setCodAmountError(false); // Reset error when changing method
    }
  };

  const handleCODAmountChange = (event) => {
    const value = event.target.value;
    onChange({ codAmount: value });
    
    // Validate COD Amount
    validateCODAmount(value);
  };

  const validateCODAmount = (amount) => {
    const amountNum = parseFloat(amount);
    if (amountNum < 1 || amountNum > 30000000 || isNaN(amountNum)) {
      setCodAmountError(true);
    } else {
      setCodAmountError(false);
    }
  };

  useEffect(() => {
    // Reset COD amount error when payment method changes
    if (data.method !== 'COD') {
      setCodAmountError(false);
    }
  }, [data.method]);

  return (
    <RootContainer>
      <Title variant="h6">Select Payment Method</Title>

      {/* Payment Method Buttons with Distinct Selected Style */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <StyledButton
          variant="contained"
          onClick={() => handlePaymentMethodChange('CASH')}
          sx={{
            bgcolor: data.method === 'CASH' ? '#4caf50' : '#e0e0e0', // Green for selected, gray for unselected
            color: data.method === 'CASH' ? 'white' : 'black',
            boxShadow: data.method === 'CASH' ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
            border: data.method === 'CASH' ? '2px solid #388e3c' : '1px solid #bdbdbd',
          }}
        >
          Cash
        </StyledButton>

        <StyledButton
          variant="contained"
          onClick={() => handlePaymentMethodChange('CARD')}
          sx={{
            bgcolor: data.method === 'CARD' ? '#1976d2' : '#e0e0e0', // Blue for selected, gray for unselected
            color: data.method === 'CARD' ? 'white' : 'black',
            boxShadow: data.method === 'CARD' ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
            border: data.method === 'CARD' ? '2px solid #1565c0' : '1px solid #bdbdbd',
          }}
        >
          Card
        </StyledButton>

        <StyledButton
          variant="contained"
          onClick={() => handlePaymentMethodChange('COD')}
          sx={{
            bgcolor: data.method === 'COD' ? '#ff9800' : '#e0e0e0', // Orange for selected, gray for unselected
            color: data.method === 'COD' ? 'white' : 'black',
            boxShadow: data.method === 'COD' ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
            border: data.method === 'COD' ? '2px solid #f57c00' : '1px solid #bdbdbd',
          }}
        >
          COD
        </StyledButton>
      </div>

      {/* COD Amount Field with Shrinked Label to Avoid Overlapping */}
      {data.method === 'COD' && (
        <StyledFormControl fullWidth margin="normal" error={codAmountError}>
          <TextField
            type="number"
            placeholder="COD Amount in PHP"
            value={data.codAmount}
            onChange={handleCODAmountChange}
            fullWidth
            InputLabelProps={{
              shrink: true, // Ensures the label does not overlap with input value
            }}
          />
          {codAmountError && (
            <FormHelperText>
              Amount must be a positive number between 1 and 30,000,000 PHP.
            </FormHelperText>
          )}
        </StyledFormControl>
      )}

      {/* Navigation Buttons */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px", flexDirection: "column" }}>
        <StyledButton onClick={onBack}>Back</StyledButton>
        <StyledButton onClick={onNext} disabled={codAmountError}>Next</StyledButton>
      </div>
    </RootContainer>
  );
};

export default PaymentDetailsForm;
