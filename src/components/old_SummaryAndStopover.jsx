// SummaryAndStopover.jsx
import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Typography } from '@mui/material';

const SummaryAndStopover = ({ data, onChange, onBack, onNext }) => {
  const [stopovers, setStopovers] = useState(data.stopovers || []);

  const addStopover = () => setStopovers([...stopovers, { address: '', city: '', province: '' }]);
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

      {stopovers.map((stop, index) => (
        <div key={index}>
          <Typography>Stopover {index + 1}</Typography>
          <TextField
            label="Stopover Address"
            value={stop.address}
            onChange={(e) => updateStopover(index, 'address', e.target.value)}
            fullWidth
          />
          <Select value={stop.city} onChange={(e) => updateStopover(index, 'city', e.target.value)} fullWidth>
            <MenuItem value="Manila">Manila</MenuItem>
            <MenuItem value="Quezon City">Quezon City</MenuItem>
          </Select>
          <Select value={stop.province} onChange={(e) => updateStopover(index, 'province', e.target.value)} fullWidth>
            <MenuItem value="Metro Manila">Metro Manila</MenuItem>
            <MenuItem value="Bulacan">Bulacan</MenuItem>
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
