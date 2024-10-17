import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Header from "../../Components/Header";

const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data) => {
    console.log("data");
    handleClick();
  };

  return (
  <Box>
 <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2,mt:2 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <TextField
          // @ts-ignore
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This Field is required & min 3 character"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flexGrow: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          // @ts-ignore
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "this field is required & min 3 character"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flexGrow: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        // @ts-ignore
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? "please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />

      <TextField
        // @ts-ignore
        error={Boolean(errors.contactNumber)}
        helperText={
          Boolean(errors.contactNumber)
            ? "please provide a valid contact number"
            : null
        }
        {...register("contactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        sx={{ width: "fit-content", ml: "auto", textTransform: "capitalize" }}
        variant="contained"
      >
        Create New User
      </Button>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          color="info"
          variant="standard"
          sx={{ width: "100%" }}
        >
          Account Created Successfully
        </Alert>
      </Snackbar>
    </Box>
  </Box>
  );
};

export default FormPage;
