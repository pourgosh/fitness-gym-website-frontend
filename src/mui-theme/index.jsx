import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#D9D9D9",
      sub: "#212121",
    },
    secondary: {
      main: "#121212",
    },
  },
  typography: {
    fontFamily: ["titleFont", "textFont"],
    h1: {
      fontFamily: "titleFont",
      fontSize: "15px",
      fontWeight: 500,
    },
    string: {
      fontFamily: "textFont",
      fontSize: "13px",
    },
    list: {
      fontFamily: "textFont",
      fontSize: "10px",
    },
  },
});
