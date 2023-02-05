import { Card, Container, Typography } from "@mui/material";

import AuthSocial from "features/auth/components/AuthSocial";
import { Images } from "constants/images";
import Logo from "components/Common/Header/Logo";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import useResponsive from "hooks/useResponsive";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    fontSize: "15px",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function AuthPage({
  mdUpContent,
  contentTitle,
  contentSub,
  children,
}) {
  const mdUp = useResponsive("up", "md");
  return (
    <RootStyle>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>

      {mdUp && (
        <SectionStyle>
          <Typography
            variant="h4"
            sx={{
              px: 5,
              mt: 10,
              mb: 5,
              textAlign: "center",
              fontFamily: "Krona One",
              fontSize: "1.5em",
            }}
          >
            {mdUpContent}
          </Typography>
          <img alt="register" src={Images.bossLogo} />
        </SectionStyle>
      )}

      <Container>
        <ContentStyle>
          <Typography
            sx={{ fontFamily: "Krona One", fontSize: "1.8em" }}
            variant="h4"
            gutterBottom
          >
            {contentTitle}
          </Typography>

          <Typography
            sx={{
              color: "#000",
              mb: 5,
              fontSize: "1em",
              fontWeight: "600",
            }}
          >
            {contentSub}
          </Typography>

          <AuthSocial />

          {children}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

AuthPage.propTypes = {
  title: PropTypes.string,
  smUpContent: PropTypes.string,
  smUpRoute: PropTypes.string,
  smUpRouteText: PropTypes.string,

  mdUpContent: PropTypes.string,

  contentTitle: PropTypes.string,
  contentSub: PropTypes.string,
};

AuthPage.defaultProps = {
  title: "",
  smUpContent: "",
  smUpRoute: "",
  smUpRouteText: "",
  mdUpContent: "",
  contentTitle: "",
  contentSub: "",
};
