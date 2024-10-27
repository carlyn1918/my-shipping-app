// SummaryAndStopover.jsx
import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Typography } from '@mui/material';
import regionsData from './philippinesRegionsCities.json'; // Import JSON data

const SummaryAndStopover = ({ data, onChange, onBack, onNext }) => {
  const [stopovers, setStopovers] = useState(data.stopovers || []);

  // Add a new stopover with default fields
  const addStopover = () => {
    setStopovers([...stopovers, { address: '', region: '', city: '' }]);
  };

  // Update a stopover field with region and city state management
  const updateStopover = (index, field, value) => {
    const updatedStopovers = stopovers.map((stop, i) =>
      i === index ? { ...stop, [field]: value } : stop
    );
    setStopovers(updatedStopovers);
    onChange({ ...data, stopovers: updatedStopovers });
  };

  return (
    <div>
      <Typography variant="h6">Summary</Typography>
      <div>Sender: {data.sender.address}, {data.sender.city}, {data.sender.province}</div>
      <div>Receiver: {data.receiver.address}, {data.receiver.city}, {data.receiver.province}</div>

      {stopovers.map((stop, index) => {
        // Get dynamic city options based on the selected region
        const cityOptions =
          regionsData.regions.find((region) => region.name === stop.region)?.cities || [];

        return (
          <div key={index} style={{ marginBottom: '16px' }}>
            <Typography>Stopover {index + 1}</Typography>
            <TextField
              label="Stopover Address"
              value={stop.address}
              onChange={(e) => updateStopover(index, 'address', e.target.value)}
              fullWidth
              style={{ marginBottom: '8px' }}
            />

            {/* Region Dropdown */}
            <Select
              label="Region"
              value={stop.region || ''}
              onChange={(e) => {
                updateStopover(index, 'region', e.target.value);
                updateStopover(index, 'city', ''); // Clear city if region changes
              }}
              fullWidth
              style={{ marginBottom: '8px' }}
            >
              {regionsData.regions.map((region) => (
                <MenuItem key={region.name} value={region.name}>
                  {region.name}
                </MenuItem>
              ))}
            </Select>

            {/* City Dropdown */}
            <Select
              label="City"
              value={stop.city || ''}
              onChange={(e) => updateStopover(index, 'city', e.target.value)}
              fullWidth
              disabled={!stop.region} // Disable until a region is selected
              style={{ marginBottom: '8px' }}
            >
              {cityOptions.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </div>
        );
      })}

      <Button onClick={addStopover} style={{ marginRight: '8px' }}>Add Stopover</Button>
      <Button onClick={onBack} style={{ marginRight: '8px' }}>Back</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
};

export default SummaryAndStopover;
