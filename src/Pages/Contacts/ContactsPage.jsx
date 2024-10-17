import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "../../Constants/contactsData";
import Header from "../../Components/Header";
import { Box } from "@mui/material";

const ContactsPage = () => {
  return (
    <div style={{ height: 750, width: "100%" }}>
      <Header
        title={"CONTACTS"}
        subtitle={"List of Contacts for Future Reference"}
      />
      <Box component={"section"} mt={2}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
};

export default ContactsPage;
