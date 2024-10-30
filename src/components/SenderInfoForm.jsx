// SenderInfoForm.jsx
import React, { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { RootContainer, Title, StyledFormControl, StyledButton } from "./styles"; // Import the styled components
import regionsData from "./philippinesRegionsCities.json"; // Import the JSON file


const SenderInfoForm = ({ data, onChange, onNext, onBack }) => {
  const defaultRegion = "Metro Manila";
  const defaultCity = "Marikina";

  const [selectedRegion, setSelectedRegion] = useState(data.region || defaultRegion);
  const [selectedCity, setSelectedCity] = useState(data.city || defaultCity);

  useEffect(() => {
    onChange({ region: defaultRegion, city: defaultCity });
  }, []);

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSelectedCity("");
    onChange({ region, city: "" });
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    onChange({ region: selectedRegion, city });
  };

  const regionOptions = regionsData.regions.map((region) => region.name);
  const cityOptions =
    regionsData.regions.find((region) => region.name === selectedRegion)?.cities || [];

  return (
    <RootContainer>
      <Title variant="h6">Select Sender Region and City</Title>
      <StyledFormControl fullWidth margin="normal">
        <InputLabel>Region</InputLabel>
        <Select value={selectedRegion} onChange={handleRegionChange} fullWidth>
          {regionOptions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      <StyledFormControl fullWidth margin="normal">
        <InputLabel>City</InputLabel>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          fullWidth
          disabled={!selectedRegion}
        >
          {cityOptions.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      {/* Button Container with Spacing */}
      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px", flexDirection: "column" }}>
        
        <StyledButton onClick={onNext}>Next</StyledButton>
      </div>
    </RootContainer>
  );
};

export default SenderInfoForm;
