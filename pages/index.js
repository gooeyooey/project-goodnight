import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Grid>
        <Head>
          <title>Project Goodnight</title>
          <link href="/favicon.ico" />
        </Head>

        <Header>
          <h1>Project Goodnight</h1>
          <p style={{ fontSize: "1rem", margin: "0" }}>Alpha | v0.1</p>
          <p>A story about a girl who can't go to sleep.</p>
        </Header>

        <Card style={{ gridArea: "story" }}>
          <Start href="./story/1" style={{ color: "lavender" }}>
            ▶
          </Start>
          <hr />
          <div>
            <h2>Pages</h2>
          </div>
          <ul>
            <li>
              <a href="./story/1">Page 1 - The Evening</a>
            </li>
            <li>
              <a href="./story/2">Page 2 - She Can't Sleep</a>
            </li>
            <li>
              <a href="./story/3">Page 3 - The Shower</a>
            </li>
            <li>
              <a href="./story/4">Page 4 - The Microwave</a>
            </li>
            <li>
              <a href="./story/5">Page 5 - She Really Can't Sleep</a>
            </li>
            <li>
              <a href="./story/A">Montage 1 - Template</a>
            </li>
            <li>
              <a href="./story/6">Page 6 - The Morning</a>
            </li>
          </ul>
        </Card>
        <Card style={{ gridArea: "about" }}>
          <div>
            <h2>What?</h2>
            <p>
              This is a multimedia netart project by <a href="https://mobile.twitter.com/gooeyooey_">Gooey</a>.
            </p>
            <p>This is a work in progress!!</p>
          </div>
          <div>
            <p>Learn more about...</p>
            <ul>
              <li>
                <a href="./project">The Project</a>
              </li>
              <li>
                <a href="./artist">The Artist</a>
              </li>
            </ul>
            <p>Find this project on...</p>
            <ul>
              <li>
                <a href="https://github.com/aefader00/project-goodnight">GitHub</a>
              </li>
            </ul>
          </div>
        </Card>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.25vw;
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "story story about";
  justify-content: center;
  max-width: 40rem;

  @media (max-width: 750px) {
    grid-template-areas:
      "header"
      "story"
      "about";
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-area: header;
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  p {
    font-size: 1.5rem;
  }
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  max-width: 50rem;
  text-align: left;
  border: 0.1rem solid;
  border-radius: 0.5rem;
  a {
    color: plum;
  }
  a:hover {
    color: darkorchid;
  }
`;

const Start = styled.a`
  color: red;
  font-size: 4rem;
  height: 10rem;
  min-width: 20rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/start.png");
  background-blend-mode: multiply;
  background-color: Plum;
  background-size: auto 100%;
  background-position: center;
  border-radius: 0.5rem;
  :hover {
    background-color: DarkOrchid;
  }
`;
