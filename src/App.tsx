import { Box, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material";
import { useCallback, useState } from "react";
import AddPost from "./Components/AddPost/AddPost";
import Navbar from "./Components/Navbar/Navbar";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Rightbar from "./Components/Rightbar/Rightbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const changeMode = useCallback((_mode: PaletteMode) => {
    setMode(_mode);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar changeMode={changeMode} mode={mode} />
          <NewsFeed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
