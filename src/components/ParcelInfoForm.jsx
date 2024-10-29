// ParcelInfoForm.jsx
import React from 'react';

import { TextField, Select, MenuItem, Button, Typography, FormControl, InputLabel, } from "@mui/material";

const ParcelInfoForm = ({ data, onChange, onBack, onNext }) => {
  const handleInputChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <div>

<Typography variant="h6">Input weight of Parcel in KG</Typography> 


      <TextField
        label="Weight of Parcel"
        type="number"
        placeholder="Weight in KG"
        value={data.weight}
        onChange={handleInputChange('weight')}
        fullWidth
      />
     
<Typography variant="h6">Select the type of vehicle</Typography> 

<FormControl fullWidth margin="normal">
<InputLabel>Choose the type of Vehicle</InputLabel>
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
      </FormControl>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default ParcelInfoForm;
