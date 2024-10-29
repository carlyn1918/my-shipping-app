// SenderInfoForm.jsx
import React, { useState } from 'react';
import {  Select, MenuItem, Button, Typography } from '@mui/material';
import regionsData from './philippinesRegionsCities.json'; // Import the JSON file

const SenderInfoForm = ({ data, onChange, onNext }) => {
  const [selectedRegion, setSelectedRegion] = useState(data.region || "");

  // Update the region and clear the city selection when the region changes
  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onChange({ region, city: "" }); // Reset city on region change
  };

  // Update the city based on selection
  const handleCityChange = (event) => {
    onChange({ city: event.target.value });
  };

  const handleInputChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  // Get region and city options from JSON data
  const regionOptions = regionsData.regions.map((region) => region.name);
  const cityOptions = regionsData.regions.find((region) => region.name === selectedRegion)?.cities || [];

  return (
    <div>
      {/* <TextField
        label="Sender Address"
        value={data.address}
        onChange={handleInputChange('address')}
        fullWidth
      /> */}

<Typography variant="h6">Select Sender Region and City</Typography> 


      {/* Region Dropdown */}
      <Select
        label="Region"
        value={selectedRegion}
        placeholder="Select Region"
        onChange={handleRegionChange}
        fullWidth
        >
        {regionOptions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>

      {/* City Dropdown (filtered based on selected region) */}
      <Select
        label="City"
        value={data.city}
        onChange={handleCityChange}
        fullWidth
        disabled={!selectedRegion} // Disable until a region is selected
      >
        {cityOptions.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default SenderInfoForm;
