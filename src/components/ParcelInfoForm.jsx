// ParcelInfoForm.jsx
import React from 'react';
import { TextField, Select, MenuItem, Button } from '@mui/material';

const ParcelInfoForm = ({ data, onChange, onBack, onNext }) => {
  const handleInputChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <div>
      <TextField
        label="Weight of Parcel"
        type="number"
        placeholder="Weight in KG"
        value={data.weight}
        onChange={handleInputChange('weight')}
        fullWidth
      />
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
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default ParcelInfoForm;
