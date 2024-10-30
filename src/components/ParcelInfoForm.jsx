// ParcelInfoForm.jsx
import React from 'react';
import { Select, MenuItem, InputLabel, TextField } from "@mui/material";
import { RootContainer, Title, StyledFormControl, StyledButton } from "./styles";

const ParcelInfoForm = ({ data, onChange, onBack, onNext }) => {
  const handleInputChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <RootContainer>
      <Title variant="h6">Parcel Information</Title>
      
      <StyledFormControl fullWidth margin="normal">
  <TextField
    label="Weight of Parcel (in KG)" // Place label here directly
    type="number"
    value={data.weight}
    onChange={handleInputChange('weight')}
    fullWidth
    InputLabelProps={{
      shrink: true, // Ensures label shrinks and floats above the input
    }}
  />
</StyledFormControl>


      <StyledFormControl fullWidth margin="normal">
        <InputLabel>Choose the Type of Vehicle</InputLabel>
        <Select
          label="Vehicle Type"
          value={data.vehicleType}
          onChange={handleInputChange('vehicleType')}
          fullWidth
        >
          <MenuItem value="Motorcycle">Motorcycle</MenuItem>
          <MenuItem value="Sedan">Sedan</MenuItem>
          <MenuItem value="Van">Van</MenuItem>
          <MenuItem value="Truck">Truck</MenuItem>
        </Select>
      </StyledFormControl>

      {/* Button Container with Spacing */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px", flexDirection: "column" }}>
        <StyledButton onClick={onBack}>Back</StyledButton>
        <StyledButton onClick={onNext}>Next</StyledButton>
      </div>
    </RootContainer>
  );
};

export default ParcelInfoForm;
