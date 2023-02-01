import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

export default function SelectField({
  options,
  width,
  disabled,
  label,
  setSelectedValue,
}) {
  // One time slot every 30 minutes.
  const timeSlots = options.map((item, index) => `${item.name}`);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <Autocomplete
      id="disabled-options-demo"
      options={timeSlots}
      // getOptionDisabled={(option) =>
      //   option === options[0] || option === options[2]
      // }
      onChange={(e, value) => handleChange(value)}
      sx={{ width: width }}
      disabled={disabled}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func,
};

SelectField.defaultProps = {
  options: [],
  width: "11%",
  disabled: false,
  label: "",
};
