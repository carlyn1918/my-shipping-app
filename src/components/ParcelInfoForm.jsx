// ParcelInfoForm.jsx
import React, { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel, TextField, FormHelperText } from "@mui/material";
import { RootContainer, Title, StyledFormControl, StyledButton } from "./styles";

const ParcelInfoForm = ({ data, onChange, onBack, onNext }) => {
  const [weightError, setWeightError] = useState(false);
  const [vehicleTypeError, setVehicleTypeError] = useState(false);

  // Validate weight when it changes
  useEffect(() => {
    validateWeight(data.weight);
  }, [data.weight]);

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    onChange({ [field]: value });

    if (field === 'weight') {
      validateWeight(value);
    }
    
    if (field === 'vehicleType') {
      validateVehicleType(value);
    }
  };

  const validateWeight = (weight) => {
    const weightNum = parseFloat(weight);
    if (weightNum < 0.001 || weightNum > 10000) {
      setWeightError(true);
    } else {
      setWeightError(false);
    }
  };

  const validateVehicleType = (vehicleType) => {
    const validTypes = ["Motorcycle", "Sedan", "Van", "Truck"];
    if (!validTypes.includes(vehicleType)) {
      setVehicleTypeError(true);
    } else {
      setVehicleTypeError(false);
    }
  };

  return (
    <RootContainer>
      <Title variant="h6">Parcel Information</Title>
      
      <StyledFormControl fullWidth margin="normal" error={weightError}>
        <TextField
          label="Weight of Parcel (in KG)"
          type="number"
          value={data.weight}
          onChange={handleInputChange('weight')}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        {weightError && <FormHelperText>Weight must be between 0.001 and 10,000 KG.</FormHelperText>}
      </StyledFormControl>

      <StyledFormControl fullWidth margin="normal" error={vehicleTypeError}>
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
        {vehicleTypeError && <FormHelperText>Please select a valid vehicle type.</FormHelperText>}
      </StyledFormControl>

      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px", flexDirection: "column" }}>
        <StyledButton onClick={onBack}>Back</StyledButton>
        <StyledButton onClick={onNext} disabled={weightError || vehicleTypeError}>Next</StyledButton>
      </div>
    </RootContainer>
  );
};

export default ParcelInfoForm;
