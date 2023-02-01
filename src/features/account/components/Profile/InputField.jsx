import "../../pages/styles/Profile.css";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { TextField } from "@mui/material";
import { profileFields } from "__mock__/fields";

export default function InputField({
  touched,
  errors,
  values,
  onBlur,
  onChange,
  isSubmitting,
  setFieldValue,
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "40%",
        display: "flex",
        padding: "0 24px",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        // alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 6, md: 9 }}
      >
        {profileFields.map((items, key) => {
          const newFieldName = `${items.fieldsName}`;
          const newValue = values[newFieldName];

          return (
            <Grid
              item
              // xs={2} sm={4} md={4}
              key={key}
            >
              {items.fieldsName === "gender" ? (
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    {items.options.map((item, key) => {
                      return (
                        <FormControlLabel
                          name="gender"
                          key={key}
                          checked={item.value === values.gender ? true : false}
                          value={item.value}
                          sx={{ fontSize: "1.5em" }}
                          control={
                            <Radio
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                },
                              }}
                            />
                          }
                          label={item.name}
                          onChange={() => setFieldValue("gender", item.value)}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              ) : (
                <TextField
                  fullWidth
                  id="outlined-error-helper-text"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={newValue}
                  name={items.fieldsName}
                  label={items.label}
                  type="text"
                  disabled={items.fieldsName === "address" ? true : false}
                  // autoComplete="email"
                  // value={handleShowAccountFields(items.fieldsName)}
                  // error={touched.email && Boolean(errors.email)}
                  // helperText={touched.email && errors.email}
                />
              )}
            </Grid>
          );
        })}
        <LoadingButton
          fullWidth
          type="submit"
          loading={isSubmitting}
          variant="contained"
          sx={{
            background: "#f3e0d0",
            width: "80%",
            margin: "2em auto",
            color: "#000",
            fontWeight: 600,
            "&:hover": {
              background: "#f5e3cf",
            },
          }}
        >
          Save Changes
        </LoadingButton>
      </Grid>
    </Box>
  );
}
