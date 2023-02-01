import { CustomDiv, Image, Text, Title } from "./Styles";

import { Button } from "@mui/material";
import { Images } from "constants/images";
import PropTypes from "prop-types";
import { WavyLink } from "react-wavy-transitions";

export default function Empty({
  width,
  height,
  fontFamily,
  margin,
  title,
  image,
  content,
  buttonText,
  route,
  showButton,
  fontSize,
}) {
  return (
    <CustomDiv
      fontFamily={fontFamily}
      fontSize={fontSize}
      width={width}
      height={height}
      margin={margin}
    >
      <Title>{title} </Title>
      <Text>{content} </Text>
      <Image src={image} />
      {showButton && (
        <Button size="large" variant="contained">
          <WavyLink duration={1000} color="#f08080" to={route}>
            {buttonText}{" "}
          </WavyLink>
        </Button>
      )}
    </CustomDiv>
  );
}

Empty.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontFamily: PropTypes.string,
  margin: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  route: PropTypes.string,
  showButton: PropTypes.bool.isRequired,
  fontSize: PropTypes.number,
};

Empty.defaultProps = {
  width: "40%",
  height: "40%",
  fontFamily: "",
  margin: "10em auto",
  title: "",
  image: Images.error404,
  content: "",
  buttonText: "",
  route: "/",
  showButton: true,
  fontSize: 0,
};
