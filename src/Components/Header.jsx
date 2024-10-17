import { Box, Typography, useTheme } from "@mui/material";

const Header = ({title,subtitle}) => {
    const theme = useTheme()
  return (
    <Box>
    <Typography sx={{
      color:theme.palette.info.light,
      fontWeight:"bold"

    }} variant="h5">{title}</Typography>
    <Typography variant="body1">{subtitle}</Typography>
  </Box>
  )
}

export default Header