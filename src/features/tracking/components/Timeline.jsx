import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";

export default function Timelines({ orderStatus, orderDetail }) {
  const steps = [
    orderDetail && orderDetail.status === "Cancelled"
      ? "Cancelled"
      : orderStatus && orderStatus.status === "Cancelled"
      ? "Cancelled"
      : "Pending",
    "Shipping",
    "Done",
  ];

  const handleCheckStep =
    (orderDetail && orderDetail.status === "Pending") ||
    (orderDetail && orderDetail.status === "Cancelled")
      ? 1
      : orderDetail.status === "Shipping"
      ? 2
      : orderDetail.status === "Done"
      ? 3
      : 1;

  return (
    <Stepper
      sx={{ mb: "1em" }}
      alternativeLabel
      activeStep={
        orderStatus && orderStatus.status === "Done" ? 3 : handleCheckStep
      }
      connector={<ColorlibConnector />}
    >
      {steps.map((label) => {
        return (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}

const ColorlibStepIcon = ({ active, completed, icon }) => {
  const icons = {
    1: <AccessTimeIcon fontSize="medium" />,
    2: <LocalShippingIcon fontSize="medium" />,
    3: <CheckCircleIcon fontSize="medium" />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
};

// active BG step color
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  // ...(ownerState.active && {
  //   backgroundImage:
  //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  //   boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  // }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

// active line color
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  // [`&.${stepConnectorClasses.active}`]: {
  //   [`& .${stepConnectorClasses.line}`]: {
  //     backgroundImage:
  //       "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
  //   },
  // },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));
