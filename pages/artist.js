import styled from "styled-components";

export default function Artist() {
  return (
    <Container>
      <Card>
        <Avatar>
          <img src="/me.png" />
        </Avatar>
        <br />
        Howdy! My name is Gooey. I’m an artist who likes humans and computers, in that order.
        <br />
        Here’s some things about me, in no particular order…
        <br />
        <ul>
          <li>I’m from California, but I’m going to college in Boston, Massachusetts.</li>

          <li>I cook for myself every night, or at least I try to.</li>

          <li>I try to read a book once a month, which I do …sometimes. </li>

          <li>I love short films, especially animations.</li>

          <li>I used to play video games a lot.</li>

          <li>I enjoy taking long walks, and I lift weights often.</li>

          <li>Estoy aprendiendo español, pero todavía no soy muy bueno. ¿Quieres practicar conmigo?</li>

          <li>I am the proud father of a twenty gallon aquarium. It’s not much, but they’re happy.</li>
        </ul>
        <br />
        Here's where you can reach me.
        <ul>
          <li>
            Twitter: <a href="https://twitter.com/gooeyooey_">@gooeyooey_</a>
          </li>
          <li>
            Mail: <a href="mailto:gooeyooey00@gmail.com">gooeyooey00@gmail.com</a>
          </li>
        </ul>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
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

const Avatar = styled.div`
  display: flex;
  justify-content: center;
`;
