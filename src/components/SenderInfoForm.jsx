// SenderInfoForm.jsx
import React, { useState, useEffect } from "react";
import { Select, MenuItem, Button, Typography, FormControl, InputLabel } from "@mui/material";
import regionsData from "./philippinesRegionsCities.json"; // Import the JSON file

const SenderInfoForm = ({ data, onChange, onNext }) => {
  // Set default values for region and city
  const defaultRegion = "Metro Manila";
  const defaultCity = "Quezon City";

  const [selectedRegion, setSelectedRegion] = useState(data.region || defaultRegion);
  const [selectedCity, setSelectedCity] = useState(data.city || defaultCity);

  // Update parent component when default values are set
  useEffect(() => {
    onChange({ region: defaultRegion, city: defaultCity });
  }, []);

  // Update the region and reset the city when the region changes
  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSelectedCity(""); // Clear city when region changes
    onChange({ region, city: "" });
  };

  // Update the city based on selection
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onChange({ region: selectedRegion, city });
  };

  // Get region and city options from JSON data
  const regionOptions = regionsData.regions.map((region) => region.name);
  const cityOptions =
    regionsData.regions.find((region) => region.name === selectedRegion)?.cities || [];

  return (
    <div>
      <Typography variant="h6">Select Sender Region and City</Typography>

      {/* Region Dropdown with Title */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Region</InputLabel>
        <Select
          value={selectedRegion}
          onChange={handleRegionChange}
          fullWidth
        >
          {regionOptions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* City Dropdown with Title */}
      <FormControl fullWidth margin="normal">
        <InputLabel>City</InputLabel>
        <Select
          value={selectedCity}
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
      </FormControl>

      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default SenderInfoForm;
