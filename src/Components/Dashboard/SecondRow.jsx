import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineChart from "../../Components/LineChart/LineChart";
import { DownloadOutlined } from "@mui/icons-material";

export const Transactions = [
  {
    txId: "01e4dsaewf",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.91",
  },
  {
    txId: "0315dsaaef",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsaef",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szvfew",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.49",
  },
];

const SecondRow = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} >
      <Paper sx={{ maxWidth: 900, flexGrow: 1,minWidth:"400px" }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Box height={"280px"}>
          <LineChart />
        </Box>
      </Paper>

      <Box
        minWidth={"280px"}
        maxHeight={380}
        flexGrow={1}
        overflow={"auto"}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
{
  Transactions.map((item)=>(
    <Paper
    sx={{
      mt: 0.4,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Box p={1.2}>
      <Typography variant="body1">{item.txId}</Typography>
      <Typography variant="body2">{item.user}</Typography>
    </Box>
    <Typography variant="body1">{item.date}</Typography>

    <Typography
      borderRadius={1.4}
      p={1}
      bgcolor={theme.palette.error.main}
      color={theme.palette.getContrastText(theme.palette.error.main)}
      variant="body2"
    >
      ${item.cost}
    </Typography>
  </Paper>
  ))
}
     

      </Box>
    </Stack>
  );
};

export default SecondRow;
