// SummaryAndStopover.jsx
import React, { useState, useEffect } from "react";
import { Select, MenuItem, Button, Typography, FormControl, InputLabel } from "@mui/material";
import regionsData from "./philippinesRegionsCities.json"; // Import the JSON file

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
      <Typography variant="h6">Summary</Typography>
      <div>Sender Location: {data.sender.region}, {data.sender.city}</div>
      <div>Receiver Location: {data.receiver.region}, {data.receiver.city}</div>

      {stopovers.map((stop, index) => (
        <div key={index}>
          <Typography>Stopover {index + 1}</Typography>
          {/* <TextField
            label="Stopover Address"
            value={stop.address}
            onChange={(e) => updateStopover(index, 'address', e.target.value)}
            fullWidth
          /> */}

<Typography variant="h6">Enter Stop over location</Typography> 


<FormControl fullWidth margin="normal">
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
</FormControl>

<FormControl fullWidth margin="normal">
<InputLabel>City</InputLabel>
          <Select
            value={stop.city || ''}
            onChange={(e) => updateStopover(index, 'city', e.target.value)}
            fullWidth
            disabled={!stop.availableCities.length}
            placeholder="Select City"
          >
            {stop.availableCities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
        </div>
      ))}
      <Button onClick={addStopover}>Add more Stopover</Button>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default SummaryAndStopover;
