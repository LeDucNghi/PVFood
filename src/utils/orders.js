import BeenhereIcon from "@mui/icons-material/Beenhere";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

export const handleStatusIcon = (status, fontSize) => {
  if (status === "Pending")
    return <QueryBuilderIcon fontSize={fontSize} color="warning" />;
  if (status === "Shipping") return <LocalShippingIcon fontSize={fontSize} />;
  if (status === "Done")
    return <BeenhereIcon fontSize={fontSize} color="success" />;
  if (status === "Cancelled")
    return <CancelIcon fontSize={fontSize} color="error" />;
};
