// ReceiverInfoForm.jsx
import React, { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { RootContainer, Title, StyledFormControl, StyledButton } from "./styles"; // Import the styled components
import { locationPh } from "./locationPH2";

const ReceiverInfoForm = ({ data, onChange, onNext, onBack }) => {
    // Set default values and states for each dropdown
    const [selectedRegion, setSelectedRegion] = useState(data.region || "");
    const [selectedProvince, setSelectedProvince] = useState(data.province || "");
    const [selectedMunicipality, setSelectedMunicipality] = useState(data.municipality || "");
    const [selectedBarangay, setSelectedBarangay] = useState(data.barangay || "");
  
    // Update the parent component when default values are set
    useEffect(() => {
      onChange({
        region: selectedRegion,
        province: selectedProvince,
        municipality: selectedMunicipality,
        barangay: selectedBarangay
      });
    }, []);
  
    // Event Handlers
    const handleRegionChange = (event) => {
      const region = event.target.value;
      setSelectedRegion(region);
      setSelectedProvince("");
      setSelectedMunicipality("");
      setSelectedBarangay("");
      onChange({ region, province: "", municipality: "", barangay: "" });
    };
  
    const handleProvinceChange = (event) => {
      const province = event.target.value;
      setSelectedProvince(province);
      setSelectedMunicipality("");
      setSelectedBarangay("");
      onChange({ region: selectedRegion, province, municipality: "", barangay: "" });
    };
  
    const handleMunicipalityChange = (event) => {
      const municipality = event.target.value;
      setSelectedMunicipality(municipality);
      setSelectedBarangay("");
      onChange({ region: selectedRegion, province: selectedProvince, municipality, barangay: "" });
    };
  
    const handleBarangayChange = (event) => {
      const barangay = event.target.value;
      setSelectedBarangay(barangay);
      onChange({ region: selectedRegion, province: selectedProvince, municipality: selectedMunicipality, barangay });
    };
  
    // Option Lists for Dropdowns
    const regionOptions = Object.values(locationPh).map(region => region.region_name);
    const provinceOptions = selectedRegion
      ? Object.keys(locationPh).find(key => locationPh[key].region_name === selectedRegion)
        ? Object.keys(locationPh[Object.keys(locationPh).find(key => locationPh[key].region_name === selectedRegion)].province_list)
        : []
      : [];
    const municipalityOptions = selectedProvince
      ? locationPh[Object.keys(locationPh).find(key => locationPh[key].region_name === selectedRegion)].province_list[selectedProvince].municipality_list.map(
          mun => Object.keys(mun)[0]
        )
      : [];
    const barangayOptions = selectedMunicipality
      ? locationPh[Object.keys(locationPh).find(key => locationPh[key].region_name === selectedRegion)]
          .province_list[selectedProvince]
          .municipality_list.find(mun => Object.keys(mun)[0] === selectedMunicipality)[selectedMunicipality].barangay_list
      : [];
  
    return (
      <RootContainer>
        <Title variant="h6">Receiver location</Title>
  
        {/* Region Dropdown */}
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
  
        {/* Province Dropdown */}
        <StyledFormControl fullWidth margin="normal" disabled={!selectedRegion}>
          <InputLabel>Province</InputLabel>
          <Select value={selectedProvince} onChange={handleProvinceChange} fullWidth>
            {provinceOptions.map((province) => (
              <MenuItem key={province} value={province}>
                {province}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
  
        {/* Municipality Dropdown */}
        <StyledFormControl fullWidth margin="normal" disabled={!selectedProvince}>
          <InputLabel>Municipality</InputLabel>
          <Select value={selectedMunicipality} onChange={handleMunicipalityChange} fullWidth>
            {municipalityOptions.map((municipality) => (
              <MenuItem key={municipality} value={municipality}>
                {municipality}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
  
        {/* Barangay Dropdown */}
        <StyledFormControl fullWidth margin="normal" disabled={!selectedMunicipality}>
          <InputLabel>Barangay</InputLabel>
          <Select value={selectedBarangay} onChange={handleBarangayChange} fullWidth>
            {barangayOptions.map((barangay) => (
              <MenuItem key={barangay} value={barangay}>
                {barangay}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
  
        {/* Button Container with Spacing */}
        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px", flexDirection: "column" }}>
          <StyledButton onClick={onNext}>Next</StyledButton>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px", flexDirection: "column" }}>
          <StyledButton onClick={onBack}>Back</StyledButton>
        </div>
      </RootContainer>
    );
  };

export default ReceiverInfoForm;
