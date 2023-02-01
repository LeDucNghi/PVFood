import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

export default function CustomModal({ style, openModal, onClose, children }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={onClose}
      closeAfterTransition
      // hideBackdrop={true}
      // hideBackdrop
      // BackdropComponent={Backdrop}
      // BackdropProps={{
      //   timeout: 500,
      // }}
    >
      <Fade in={openModal}>
        <Box sx={customStyle(style)}>{children}</Box>
      </Fade>
    </Modal>
  );
}

CustomModal.propTypes = {
  style: PropTypes.object,
  openModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

CustomModal.defaultProps = {
  style: {},
  openModal: false,
};

const customStyle = (style) => {
  return (style = {
    position: "absolute",
    top: style && style.top ? style.top : "50%",
    left: style && style.left ? style.left : "50%",

    transform: "translate(-50%, -50%)",

    width: style && style.width ? style.width : 400,
    height: style && style.height ? style.height : null,

    bgcolor: style && style.bgcolor ? style.bgcolor : "background.paper",

    boxShadow: style && style.boxShadow ? style.boxShadow : 24,
    outline: "none",
    border: "none",
    borderRadius: "15px",
    overflow: style && style.overflow ? style.overflow : null,

    display: style && style.display ? style.display : null,
    justifyContent: style && style.justifyContent ? style.justifyContent : null,
    alignItems: style && style.alignItems ? style.alignItems : null,
    flexDirection: style && style.flexDirection ? style.flexDirection : null,
    // p: 0,
    padding: style && style.padding ? style.padding : "0 1em",
  });
};
