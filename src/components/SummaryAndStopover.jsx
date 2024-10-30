// SummaryAndStopover.jsx
import React, { useState } from "react";
import { Select, MenuItem, Typography, FormControl, InputLabel } from "@mui/material";
import regionsData from "./philippinesRegionsCities.json";
import { RootContainer, StyledFormControl, StyledButton } from "./styles";

const SummaryAndStopover = ({ data, onChange, onBack, onNext }) => {
  const [stopovers, setStopovers] = useState(
    data.stopovers || [{ address: '', region: '', city: '', availableCities: [] }]
  );

  const addStopover = () => 
    setStopovers([...stopovers, { address: '', region: '', city: '', availableCities: [] }]);

  const updateStopover = (index, field, value) => {
    const updatedStopovers = stopovers.map((stop, i) =>
      i === index ? { ...stop, [field]: value } : stop
    );
    setStopovers(updatedStopovers);
    onChange({ ...data, stopovers: updatedStopovers });
  };

  const handleRegionChange = (index, selectedRegion) => {
    const regionData = regionsData.regions.find((region) => region.name === selectedRegion);
    const cities = regionData ? regionData.cities : [];

    const updatedStopovers = stopovers.map((stop, i) =>
      i === index
        ? { ...stop, region: selectedRegion, city: '', availableCities: cities }
        : stop
    );

    setStopovers(updatedStopovers);
    onChange({ ...data, stopovers: updatedStopovers });
  };

  return (
    <div>
      <RootContainer>
        <Typography variant="h6">Summary</Typography>
        <Typography>Sender Location: {data.sender.region}, {data.sender.city}</Typography>
        <Typography>Receiver Location: {data.receiver.region}, {data.receiver.city}</Typography>
      </RootContainer>

      {stopovers.map((stop, index) => (
        <RootContainer key={index}>
          <Typography variant="h6">Stopover {index + 1}</Typography>
          <Typography variant="subtitle1">Enter Stopover Location</Typography>

          <StyledFormControl fullWidth margin="normal">
            <InputLabel>Region</InputLabel>
            <Select
              value={stop.region || ''}
              onChange={(e) => handleRegionChange(index, e.target.value)}
              fullWidth
            >
              {regionsData.regions.map((region) => (
                <MenuItem key={region.name} value={region.name}>
                  {region.name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>

          <StyledFormControl fullWidth margin="normal">
            <InputLabel>City</InputLabel>
            <Select
              value={stop.city || ''}
              onChange={(e) => updateStopover(index, 'city', e.target.value)}
              fullWidth
              disabled={!stop.availableCities.length}
            >
              {stop.availableCities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </RootContainer>
      ))}

      <RootContainer>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
          <StyledButton onClick={addStopover}>Add Stopover</StyledButton>
          <StyledButton onClick={onBack}>Back</StyledButton>
          <StyledButton onClick={onNext}>Next</StyledButton>
        </div>
      </RootContainer>
    </div>
  );
};

export default SummaryAndStopover;
