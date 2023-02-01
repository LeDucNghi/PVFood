import * as React from "react";

import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { handleRatingChange } from "../productThunk";
import { styled } from "@mui/material/styles";

function Rate({ setFieldValue }) {
  const [value, setValue] = React.useState(1);
  // const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },

        position: "relative",
        display: "flex",
        margin: "0.5em 0 0.5em 0.8em",
        height: "1.5em",
      }}
    >
      <StyledRating
        name="highlight-selected-only"
        defaultValue={value}
        size="large"
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
        onChange={(event, newValue) => {
          handleRatingChange(event, newValue, setFieldValue, setValue);
        }}
        // onChangeActive={(event, newHover) => {
        //   setHover(newHover);
        // }}
      />

      {value !== null && <Box sx={{ ml: 2 }}>{customIcons[value].label}</Box>}
    </Box>
  );
}

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="large" color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="large" color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize="large" color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize="large" color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize="large" color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <span {...other} style={{ fontSize: "1.5em" }}>
      {customIcons[value].icon}
    </span>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rate;
