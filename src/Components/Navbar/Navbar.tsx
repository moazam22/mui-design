import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  MenuItem,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import DP from "../../Images/joey.jpeg";
import { useEffect, useRef, useState } from "react";
import { StyledToolbar, Searchbar, Icons, UserBox } from "./Styled.Navbar";

const Navbar = () => {
  const [openMenu, setMenu] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setMenu(false);
  };

  const handleToggle = () => setMenu((prevOpen) => !prevOpen);

  const prevOpen = useRef(openMenu);

  useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography display={{ xs: "none", sm: "block" }} sx={{ fontWeight: 600 }}>
          App Name
        </Typography>
        <RedeemIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Searchbar>
          <SearchIcon sx={{ color: "#b9b3b3" }} />
          <InputBase placeholder="Search..." sx={{ color: "black !important" }} fullWidth />
        </Searchbar>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </Icons>
          <UserBox ref={anchorRef}>
            <Avatar
              alt="Joey Tribiani"
              sx={{
                height: 40,
                width: 40,
                objectFit: "cover",
                cursor: "pointer",
              }}
              src={DP}
              onClick={handleToggle}
            />
            <Typography fontWeight="600">Joey</Typography>
          </UserBox>
        </Box>
      </StyledToolbar>
      <Popper
        open={openMenu}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={openMenu}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </AppBar>
  );
};

export default Navbar;
