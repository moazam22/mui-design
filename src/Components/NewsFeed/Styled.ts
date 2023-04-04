import { Box, Card, styled } from "@mui/material";

export const StyledCard = styled(Card)({
  margin: 5,
});

export const MainContainer = styled(Box)({
  marginTop: "2em !important",
  flex: 4,
  p: 1,
  "@media (max-width: 599px)": {
    marginLeft: "10px !important",
    marginRight: "10px !important",
  },
});
