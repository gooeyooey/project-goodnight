import React from "react";
import styled from "styled-components";
import Panel from "../../components/story/panel";
import Sound from "../../components/story/sound";
import Router from "next/router";
import Head from "next/head";

export default function Page() {
	// Controlling the reader's progress.
	const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

	// Increment the reader's step by one.
	const increment_step = () => {
		set_step((current_step) => (current_step += 1));
	};

	// Decrement the reader's step by one.
	const decrement_step = () => {
		set_step((current_step) => (current_step -= 1));
	};

	// Controller for the reader's inputs.
	React.useEffect(() => {
		// On click, increment the step.
		document.addEventListener("click", increment_step);

		// On keydown, read the input and increment or decrement appropriately.
		document.addEventListener("keydown", (event) => {
			if (["ArrowRight", "KeyD"].includes(event.code)) {
				increment_step();
				event.stopImmediatePropagation();
			} else if (["ArrowLeft", "KeyA"].includes(event.code)) {
				decrement_step();
				event.stopImmediatePropagation();
			}
		});
	}, []);

	return (
		<Container>
			<Grid>
				<Head>
					<title>Project Goodnight</title>
					<link href="/favicon.ico" />
				</Head>
				<Panel
					type="image"
					source="/story/test/square.png"
					position="1 / 4 / 2 / 5"
					display={current_step > 0}
				/>
				<Panel
					type="image"
					source="/story/test/circle.png"
					position="1 / 5 / 2 / 6"
					display={current_step > 1}
				/>
				<Panel
					type="image"
					source="/story/test/trired.png"
					position="2 / 4 / 3 / 6"
					display={current_step > 2}
				/>
				<Panel
					type="image"
					source="/story/test/triblue.png"
					position="2 / 4 / 3 / 6"
					display={current_step > 3}
				/>
				<Panel
					type="text"
					style={{ color: "purple", backgroundColor: "lightgreen" }}
					source="Hello, this is a text!"
					position="3 / 4 / 4 / 5"
					display={current_step > 4}
				/>
				<Panel
					type="video"
					source="/story/test/video.mp4"
					position="3 / 5 / 4 / 6"
					display={current_step > 5}
				/>
				<Panel
					type="image"
					source="/story/test/horse.jpg"
					position="3 / 6 / 4 / 7"
					display={current_step > 6}
				/>
				<Panel
					type="sound"
					source="/story/test/sound.ogg"
					display={current_step == 7}
				></Panel>
				<Panel
					type="image"
					source="/story/test/square.png"
					position="3 / 7 / 4 / 8"
					display={current_step > 7}
				/>
				<Panel
					type="image"
					source="/story/test/square.png"
					position="3 / 8 / 4 / 9"
					display={current_step > 8}
				/>
			</Grid>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	//margin-bottom: 60rem; If you can figure out how to fix the below problem, uncomment this.
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 15rem);
	grid-template-rows: repeat(8, 15rem);
	// Setting the number of repeats to below the number of steps causes each panel to subtly vary in size. This is insane.
	grid-gap: 1rem;
	margin: 1rem;
`;
