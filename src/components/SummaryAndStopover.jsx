// SummaryAndStopover.jsx
import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, Typography } from "@mui/material";
import regionsData from "./philippinesRegionsCities.json";

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
      <div>Sender: {data.sender.address}, {data.sender.region}, {data.sender.city}</div>
      <div>Receiver: {data.receiver.address}, {data.receiver.region}, {data.receiver.city}</div>

      {stopovers.map((stop, index) => (
        <div key={index}>
          <Typography>Stopover {index + 1}</Typography>
          <TextField
            label="Stopover Address"
            value={stop.address}
            onChange={(e) => updateStopover(index, 'address', e.target.value)}
            fullWidth
          />
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
        </div>
      ))}
      <Button onClick={addStopover}>Add Stopover</Button>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default SummaryAndStopover;
