import React from "react";
import styled from "styled-components";

export default function Canvas({ children }) {
  return (
    <Container>
      <Grid>{children}</Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  //margin-bottom: 60vh; If you can figure out how to fix the below problem, uncomment this.
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0.25rem, 2rem));
  // Setting the number of repeats to below the number of steps causes each panel to subtly vary in size. This is insane.
  grid-template-rows: repeat(120, minmax(0.25rem, 2rem));
  grid-gap: 1vw;
  margin: 1vw;
`;
