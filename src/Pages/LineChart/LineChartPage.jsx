import { Box } from "@mui/material";
import LineChart from "../../Components/LineChart/LineChart";
import Header from "../../Components/Header";


const LineChartPage = () => {

  return (
    <Box >
       <Header title="Line Chart" subtitle="Simple Line Chart" />
       <Box height={"75vh"} mt={2}>
      <LineChart/>
       </Box>
    </Box>
  );
};

export default LineChartPage;
