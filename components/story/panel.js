import React from "react";
import styled from "styled-components";

export default function Panel({ display, position, source }) {
  return (
    <Container
      // Pass style properties to the Container <div>.
      style={{
        "--gridArea": position,
        "--visibility": display ? "initial" : "none",
      }}
    >
      <img src={source} />
    </Container>
  );
}

const Container = styled.div`
  grid-area: var(--gridArea);
  display: var(--visibility);

  & > * {
    height: 100%;
    width: 100%;
  }
`;
