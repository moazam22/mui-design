import { Box, styled } from "@mui/material";

export const RghtBar = styled(Box)(({ theme }) => ({
  display: "none",
  padding: 2,
  flex: 2,
  "@media (min-width: 1024px)": {
    display: "block",
  },
}));

export const RghtBarContainer = styled(Box)(({ theme }) => ({
  width: "350px",
  position: "fixed",
  "@media (max-width: 1440px)": {
    width: "250px",
  },
  "@media (min-width: 1441px)": {
    marginLeft: "3em",
  },
}));
