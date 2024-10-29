// src/components/styles.js

import { styled } from "@mui/system";
import { Typography, FormControl, Button } from "@mui/material";

// Root container styling
export const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(3),
  borderRadius: 8,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: 400,
  margin: "0 auto",
}));

// Title styling
export const Title = styled(Typography)(({ theme }) => ({
  color: "#1a73e8",
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

// FormControl styling with floating label adjustments
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: "#ff6f00",
    transform: "translate(14px, 12px) scale(1)",
    "&.Mui-focused, &.MuiFormLabel-filled": {
      transform: "translate(14px, -6px) scale(0.9)",
      backgroundColor: "#f5f5f5",
      padding: "0 4px",
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

// Enhanced Button styling
export const StyledButton = styled(Button)({
  background: "linear-gradient(45deg, #ff5722, #ff9800)", // Gradient from red to orange
  color: "#fff",
  fontWeight: 600,
  marginTop: 16,
  padding: "8px 16px",
  borderRadius: 8,
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0px 4px 10px rgba(255, 87, 34, 0.3)",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 12px rgba(255, 87, 34, 0.4)",
    background: "linear-gradient(45deg, #ff7043, #ffa726)", // Lighter on hover
  },
});
