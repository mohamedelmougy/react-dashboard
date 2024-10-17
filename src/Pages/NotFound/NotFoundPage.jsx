import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const NotFoundPage = () => {
    const theme = useTheme();
  return (
    <Box>
    <Typography align="center" color={theme.palette.error.main} variant="h5">
      There is no design yet
      <br />
      <br />
      Please try again later..
    </Typography>
  </Box>
  )
}

export default NotFoundPage