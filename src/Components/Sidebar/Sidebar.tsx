import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  PaletteMode,
  Switch,
} from "@mui/material";
import { sidebarItems } from "../../utils/index";
import SidebarElement from "./SidebarElement";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { FC } from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };

interface Props {
  mode: PaletteMode;
  changeMode: (_mode: PaletteMode) => void;
}

const Sidebar: FC<Props> = ({ changeMode, mode }) => {
  const handleChange = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <Box flex={1} p={2} display={{ xs: "none", sm: "block" }}>
      <Box position="fixed">
        <List>
          {!!sidebarItems?.length &&
            sidebarItems.map((item, index) => (
              <SidebarElement name={item.name} icon={item.icon} key={index} />
            ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch onChange={handleChange} {...label} defaultChecked />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
