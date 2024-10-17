import { Box } from "@mui/material";
import PieChart from "../../Components/PieChart/PieChart";
import Header from "../../Components/Header";

const PieChartPage = () => {
  return (
    <Box >
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />

      <Box  height={"75vh"}>

      <PieChart />
      </Box>
    </Box>
  );
};

export default PieChartPage;
