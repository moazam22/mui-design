import { Box, Card, styled } from "@mui/material";

export const StyledCard = styled(Card)({
  margin: 5,
  marginTop: "2em",
});

export const MainContainer = styled(Box)({
  flex: 4,
  p: 1,
  "@media (max-width: 599px)": {
    marginLeft: "10px !important",
    marginRight: "10px !important",
  },
});
