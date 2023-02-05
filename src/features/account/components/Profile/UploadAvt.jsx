import "../../pages/styles/Profile.css";

import { Box, IconButton, Stack, Typography } from "@mui/material";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Images } from "constants/images";
import { useState } from "react";

export default function UploadAvt({ values, setFieldValue }) {
  const [onHover, setOnHover] = useState(false);
  var [img, setImg] = useState(null);

  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      img = URL.createObjectURL(e.target.files[0]);
      setImg(img);

      setFieldValue("avatarUrl", e.target.files[0]);
    }
  };

  return (
    <Box className="avt">
      <Stack
        className="img_cover"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          className="icon_button"
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <input
            style={{
              position: "absolute",
              visibility: "hidden",
              opacity: 0,
            }}
            accept="image/*"
            type="file"
            onChange={(e) => imageChange(e)}
          />
          <img
            src={
              img ? img : values.avatarUrl ? values.avatarUrl : Images.avatar1
            }
            alt=""
          />

          <div className={onHover ? "onHover show" : "onHover"}>
            <AddAPhotoIcon
              fontSize="large"
              sx={{ color: "#fff" }}
              // sx={{ transition: "all 0.5s ease-in-out" }}
            />

            <Typography
              sx={{
                mt: "1em",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1em",
                //   transition: "all 0.5s ease-in-out",
              }}
            >
              Upload photo
            </Typography>
          </div>
        </IconButton>
      </Stack>

      <Typography sx={{ mt: "1em" }}>
        Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
      </Typography>
    </Box>
  );
}
