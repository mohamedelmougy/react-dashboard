import { Box, Paper, Stack, Typography } from "@mui/material";
import PieChart from "../PieChart/PieChart";
import { useTheme } from "@emotion/react";
import BarCart from "../BarChart/BarCart";
import Geography from "../Geography/Geography";

const ThirdRow = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5}>
      <Paper sx={{ width: "28%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Box height={"220px"}>
          <PieChart isDashboard={true} />
        </Box>
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height={"350px"}>
          <BarCart isDashboard={true} />
        </Box>
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Geography Based Traffic
        </Typography>
        <Box height={"400px"}>
          <Geography isDashboard={true} />
        </Box>
      </Paper>
    </Stack>
  );
};

export default ThirdRow;
