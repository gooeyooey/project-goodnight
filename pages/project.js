import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Artist() {
  return (
    <Container>
      <Card>
        <h1>No, seriously, what is this?</h1>
        <p>
          <b>This project is an attempt to put the "web" back into "webcomic" ...and to take the "comic" out.</b>
        </p>

        <p>With the exception of webtoons, modern webcomics are often not much different than traditional comics.</p>

        <p>
          They follow the same rules and structure of traditional comics, and some are even designed with the hope of being printed and sold in
          stores. In practice, these are traditional comics that simply use the digital equivalents of analog tools to achieve similar results. There
          is nothing much "web" about them.
        </p>

        <p>
          Of course, there is nothing wrong with this approach. Artists have produced great works of art this way for decades, and will continue to do
          so.
        </p>

        <p>
          However, there is room for innovation. While webcomics have more or less stagnated, browsers have become powerful engines for artists. It
          has never been easier to create and share pages featuring complex images, sound, video, or interactivity. There are many new opportunities
          for creative expression with modern browsers and the modern internet. Why shouldn’t webcomics make use of this new toolkit?
        </p>

        <p>
          In truth, I am not concerned with the evolution of the medium of comics, or webcomics for that matter. I am concerned with the evolution of
          art on the internet.
        </p>

        <p>
          The internet is a canvas unlike any other in human history, and yet this fact is lost in the age of social media content. I hope to reignite
          a multimedia approach to netart, in opposition to the recent tendency for content to conform to the structure of old media. There is no
          practical reason for comics, novels, movies, and video games to be segregated into unique mediums on the internet. Project Goodnight is an
          attempt to prove that they can all peacefully coexist in the amorphous medium of netart.
        </p>

        <p>
          It should be noted that the main purpose of this project is to act as a prototype of what kind of netart is possible using modern tools.
          While I have tried to make an interesting story, the narrative is not the true focus.
        </p>
        <p>
          It should also be noted that I am not under the impression that this project is truly innovative. All of the techniques utilized here have
          been utilized before, sometimes many decades ago. My hope is that the combination of these techniques into a cohesive whole will make their
          creative opportunities greater known for other artists to further innovate upon.
        </p>
        <p>
          It should finally be noted that this project is a work in progress! Seriously, it is in alpha right now. This description is meant to
          describe the theoretical groundwork this project is established on, not to describe what it embodies at this very moment.
        </p>
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
`;
