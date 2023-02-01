import PropTypes from "prop-types";
import React from "react";

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  title: "Product detail",
  content: "Product detail",
};

export default function Banner({ title, content }) {
  return (
    <>
      <h2>{`${title}`} </h2>
      <p>{`Home | ${content}`} </p>
    </>
  );
}
