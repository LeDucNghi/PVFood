import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRef, useState } from "react";

import Iconify from "components/Layouts/Dashboard/Iconify";
import { fetchUserByIdSuccess } from "features/admin/users/userSlice";
import { useDispatch } from "react-redux";

// ----------------------------------------------------------------------

export default function TableMoreMenu({ row, setValue }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleEditRoute = () => {
    dispatch(fetchUserByIdSuccess(row));
    setValue(1);
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem sx={{ color: "text.secondary" }}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Delete"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>

        <MenuItem
          // component={RouterLink}
          // to=`${}`
          sx={{ color: "text.secondary" }}
          onClick={() => handleEditRoute()}
        >
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Edit"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
