import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../Constants/invoices";
import { Box } from "@mui/material";
import Header from "../../Components/Header";

const InvoicesPage = () => {
  return (
    <div style={{ height: 750, width: "100%" }}>
        <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box component={"section"} mt={2}>
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </div>
  );
};

export default InvoicesPage;
