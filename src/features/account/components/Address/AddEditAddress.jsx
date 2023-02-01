import "../../pages/styles/Address.css";

import { Form, Formik } from "formik";
import { TextField, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";

// import { handleUpdateAddress } from "../../accountThunk";


export default function AddEditAddress({ isEdit }) {
  const dispatch = useDispatch();

  const addressField = [
    {
      id: 1,
      label: "Full Name",
      name: "fullname",
    },
    {
      id: 2,
      label: "Phone",
      name: "phone",
    },
    {
      id: 3,
      label: "City",
      name: "city",
    },
    {
      id: 4,
      label: "Address",
      name: "address",
    },
  ];

  const initialValues = {
    fullname: "",
    phone: "",
    city: "",
    address: "",
  };

  return (
    <Formik
      // enableReinitialize={true}
      initialValues={initialValues}
      // validationSchema={addUserValidation}
      // onSubmit={(values) => dispatch(handleUpdateAddress())}
    >
      {(formikProps) => {
        const {
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          setFieldValue,
        } = formikProps;
        return (
          <Form>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4">
                {isEdit ? "Update Address" : "New Address"}{" "}
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {addressField.map((items, index) => {
                  const newFieldName = `${items.name}`;
                  const newValue = values[newFieldName];
                  return (
                    <Grid item xs={6} key={index}>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label={items.label}
                        variant="outlined"
                        value={newValue}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}
