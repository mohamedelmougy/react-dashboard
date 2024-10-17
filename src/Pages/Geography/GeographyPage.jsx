import { Box, useTheme } from "@mui/material";
import Geography from "../../Components/Geography/Geography";
import Header from "../../Components/Header";

const GeographyPage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        border={`1px solid ${theme.palette.text.primary}`}
        borderRadius={1}
        height={"75vh"}
        mt={2}
      >
        <Geography />
      </Box>
    </Box>
  );
};

export default GeographyPage;
