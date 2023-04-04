import { Box, styled, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const Searchbar = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2px",
  alignItems: "center",
  backgroundColor: "white",
  padding: "0px 10px",
  width: "40%",
  borderRadius: "15px",
}));

export const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  padding: "0px 10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
