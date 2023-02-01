import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { StyledTextField } from "constants/styledMUI";
import { TextField } from "@mui/material";

export const Field = ({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  autoFocus,
  color,
}) => {
  return (
    <>
      <TextField
        fullWidth
        name={name}
        label={label ? label : name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        // focused={mode === "dark" ? true : false}
        // mode={mode}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        margin="normal"
        id="outlined-error-helper-text"
        color={color}
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <p
            style={{
              color: "red",
              fontSize: "12px",
            }}
          >
            {msg}{" "}
          </p>
        )}
      </ErrorMessage>
    </>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  color: PropTypes.string,
};

Field.defaultProps = {
  name: "",
  label: "",
  type: "text",
  value: "",
  autoComplete: "",
  autoFocus: false,
  color: "secondary",
};
