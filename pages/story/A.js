import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import useRouter from "next/router";
import styled from "styled-components";
import Head from "next/head";

export default function Page() {
	// Controlling the reader's progress.
	const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

	const total_steps = 1; // The number of steps on the page.
	const next_page = "./7"; // Where the next page is located.

	// Push the reader to the next page after the last step.
	if (current_step > total_steps) {
		Router.push(next_page);
	}

	// Increment the reader's step by one.
	const increment_step = () => {
		set_step((current_step) => (current_step += 1));
	};

	// Controller for the reader's inputs.
	React.useEffect(() => {
		// On click, increment the step.
		document.addEventListener("click", increment_step);
	}, []);

	return (
		<Container>
			<Head>
				<title>Project Goodnight</title>
				<link href="/favicon.ico" />
			</Head>
			There will be a montage here.
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	//margin-bottom: 60vh; If you can figure out how to fix the below problem, uncomment this.
`;
