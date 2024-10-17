import { Box } from "@mui/material";
import BarCart from "../../Components/BarChart/BarCart";
import Header from "../../Components/Header";

const BarChartPage = () => {
  return (
    <Box>
  <Header
        title="Bar Chart"
        subtitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Box  height={"75vh"} component={"section"}>
      <BarCart />
      </Box>
    </Box>
  );
};

export default BarChartPage;
