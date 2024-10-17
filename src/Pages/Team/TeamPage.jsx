import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../Constants/manageTeamData";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../Components/Header";

const TeamPage = () => {
  const theme = useTheme();

  const colorAccess = (access) => {
    let color;
    switch (access) {
      case "Admin":
        color = theme.palette.primary.dark;
        break;
      case "Manager":
        color = theme.palette.secondary.dark;
        break;
      case "User":
        color = "teal";
        break;

      default:
        color = theme.palette.primary.dark;
        break;
    }
    return color;
  };

  console.log("🚀 ~ TeamPage ~ cc:", theme.palette.secondary.dark);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={[
              {
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                mx: "auto",
                mt: "8px",
                display: "flex",
                justifyContent: "space-evenly",
                bgcolor: colorAccess(access),
              },
            ]}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "white" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "white" }} fontSize="small" />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "white" }} fontSize="small" />
            )}
            <Typography sx={{ fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 750, width: "100%" }}>
      <Header title={"TEAM"} subtitle={"Managing the Team Members"}/>
      <Box component={"section"} mt={2}>
      <DataGrid rows={rows} columns={columns} />
      </Box>
    </div>
  );
};

export default TeamPage;
