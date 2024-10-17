import {  Stack, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "./Card";
export const data1 = [
  {
    id: "javascript",
    label: "javascript",
    value: 40,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 60,
    color: "hsl(22, 90%, 90%)",
  },
];

export const data2 = [
  {
    id: "javascript",
    label: "javascript",
    value: 70,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 30,
    color: "hsl(22, 90%, 90%)",
  },
];

export const data3 = [
  {
    id: "javascript",
    label: "javascript",
    value: 44,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 66,
    color: "hsl(22, 90%, 90%)",
  },
];

export const data4 = [
  {
    id: "javascript",
    label: "javascript",
    value: 77,
    color: "hsl(111, 90%, 90%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 33,
    color: "hsl(22, 90%, 90%)",
  },
];
const FirstRow = () => {
  const theme = useTheme();
  return (
    <Stack
      flexWrap={"wrap"}
      gap={1}
      direction={"row"}
      justifyContent={{ xs: "center", md: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subtitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subtitle={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subtitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subtitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default FirstRow;
