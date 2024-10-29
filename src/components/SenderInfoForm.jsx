// SenderInfoForm.jsx
import React, { useState, useEffect } from "react";
import { Select, MenuItem, Button, Typography, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import regionsData from "./philippinesRegionsCities.json";

// Custom Styled Components using MUI's `styled` utility
const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(3),
  borderRadius: 8,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: 400,
  margin: "0 auto",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#1a73e8",
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "#ff6f00",
    transform: "translate(14px, 12px) scale(1)", // Initial positioning
    "&.Mui-focused, &.MuiFormLabel-filled": {
      transform: "translate(14px, -6px) scale(0.9)", // Adjust positioning when focused or filled
      backgroundColor: "#f5f5f5", // Optional background to make the label pop
      padding: "0 4px", // Extra padding to make it clearer
    },
  },
  "& .MuiInputBase-root": {
    color: "#1a73e8",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ff6f00",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e53935",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e53935",
  },
}));

const StyledButton = styled(Button)({
  backgroundColor: "#e53935",
  color: "#fff",
  marginTop: 16,
  "&:hover": {
    backgroundColor: "#d32f2f",
  },
});

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
    <RootContainer>
      <Title variant="h6">Select Sender Region and City</Title>

      <StyledFormControl fullWidth margin="normal">
        <InputLabel shrink>Region</InputLabel>
        <Select value={selectedRegion} onChange={handleRegionChange} fullWidth>
          {regionOptions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      <StyledFormControl fullWidth margin="normal">
        <InputLabel shrink>City</InputLabel>
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

      <StyledButton onClick={onNext}>Next</StyledButton>
    </RootContainer>
  );
};

export default SenderInfoForm;
