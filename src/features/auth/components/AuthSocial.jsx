import { Button, Divider, Stack, Typography } from "@mui/material";

import CustomModal from "components/Common/Modal/Modal";
import Iconify from "components/Layouts/Dashboard/Iconify";
import { Images } from "constants/images";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function AuthSocial() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => setOpen(true)}
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
        >
          <Iconify
            icon="eva:google-fill"
            color="#DF3E30"
            width={22}
            height={22}
          />
        </Button>

        <Button
          onClick={() => setOpen(true)}
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
        >
          <Iconify
            icon="eva:facebook-fill"
            color="#1877F2"
            width={22}
            height={22}
          />
        </Button>

        <Button
          onClick={() => setOpen(true)}
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
        >
          <Iconify
            icon="eva:twitter-fill"
            color="#1C9CEA"
            width={22}
            height={22}
          />
        </Button>
      </Stack>

      <CustomModal
        style={{
          boxShadow: "none",
          bgcolor: "transparent",
        }}
        openModal={open}
        onClose={() => setOpen(!open)}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            margin: "0 auto",
            borderRadius: "15px",
          }}
          src={Images.comingSoon}
          alt=""
        />
      </CustomModal>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
