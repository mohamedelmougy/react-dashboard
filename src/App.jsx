import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import { useColorScheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {
  const { mode, setMode } = useColorScheme();
  const [open, setOpen] = React.useState(false);

  if (!mode) {
    return null;
  }

 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <TopBar
        mode={mode}
        setMode={setMode}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          <Outlet/>
        </Typography>
      </Box>
    </Box>
  );
}
