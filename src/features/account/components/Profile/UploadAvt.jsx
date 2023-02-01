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

      // const reader = new FileReader();
      // reader.readAsDataURL(e.target.files[0]);
      // reader.onload = () => {
      //   //   image = reader.result;
      //   //   setImage(image);
      //   //   setFieldValue("image", image);
      //   dispatch(setImage(reader.result));
      // };
    }
  };

  return (
    // <div className="profile_left_side">
    <Box
      sx={{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          width: "200px",
          height: "200px",
          //   bgcolor: "pink",
          border: "1px dashed #919eab",
          borderRadius: "50%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{
            // bgcolor: "red",
            border: "0.5px solid #ccc",
            width: "150px",
            height: "150px",
            overflow: "hidden",
          }}
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
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
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
    // </div>
  );
}
