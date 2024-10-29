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

// Button styling
export const StyledButton = styled(Button)({
  backgroundColor: "#e53935",
  color: "#fff",
  marginTop: 16,
  "&:hover": {
    backgroundColor: "#d32f2f",
  },
});
