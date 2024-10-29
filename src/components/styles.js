// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5", // Light background
    padding: theme.spacing(3),
    borderRadius: 8,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: 400,
    margin: "0 auto",
  },
  title: {
    color: "#1a73e8", // Blue tone
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    "& .MuiInputLabel-root": {
      color: "#ff6f00", // Yellow tone
    },
    "& .MuiInputBase-root": {
      color: "#1a73e8", // Text in input fields
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff6f00", // Outline yellowish
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e53935", // Red when hovered
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e53935", // Red when focused
    },
  },
  button: {
    backgroundColor: "#e53935", // Red tone
    color: "#fff",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
  },
}));

export default useStyles;
