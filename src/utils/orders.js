import BeenhereIcon from "@mui/icons-material/Beenhere";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export const handleStatusIcon = (status) => {
  if (status === "Pending") return <QueryBuilderIcon color="warning" />;
  if (status === "Shipping") return <LocalShippingIcon />;
  if (status === "Done") return <BeenhereIcon color="success" />;
  if (status === "Cancelled") return <CancelIcon color="error" />;
};
