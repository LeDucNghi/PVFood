import "./Loading.css";

import React from "react";
import styled from "styled-components";

function Loading({ height }) {
  return (
    <Loader height={height ? height : "100%"}>
      <div className="loader"></div>;
    </Loader>
  );
}

const Loader = styled.div`
  height: ${(props) => props.height};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
