import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import FirstRow from "../../Components/Dashboard/FirstRow";
import SecondRow from "../../Components/Dashboard/SecondRow";
import ThirdRow from "../../Components/Dashboard/ThirdRow";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../Components/Header";

const DashboardPage = () => {
  return (
    <Box>
   <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
   <Header title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />

    <Box textAlign={"right"} >
      <Button
        sx={{ p: "6px 8px", textTransform: "capitalize" }}
        variant="contained"
        color="primary"
      >
        <DownloadOutlined />
        Download Reports
      </Button>
    </Box>

   </Stack>


      <Box component={"section"} mt={2}>
        <FirstRow />
      </Box>

      <Box component={"section"} mt={2}>
        <SecondRow />
      </Box>

      <Box component={"section"} mt={2}>
        <ThirdRow />
      </Box>
    </Box>
  );
};

export default DashboardPage;
