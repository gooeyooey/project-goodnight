import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import Router from "next/router";
import Head from "next/head";

export default function Page() {
	// Controlling the reader's progress.
	const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

	const total_steps = 10; // The number of steps on the page.
	const next_page = "./4"; // Where the next page is located.

	// Push the reader to the next page after the last step.
	if (current_step > total_steps) {
		Router.push(next_page);
	}

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
		<Canvas>
			<Head>
				<title>Project Goodnight</title>
				<link href="/favicon.ico" />
			</Head>
			<Panel
				source="/story/3/1.png"
				position="1 / 1 / 9 / 13"
				display={current_step > 0}
			/>
			<Panel
				source="/story/3/2.png"
				position="9 / 1 / 17 / 13"
				display={current_step > 1}
			/>
			<Panel
				source="/story/3/3.png"
				position="17 / 1 / 31 / 13"
				display={current_step > 2}
			/>
			<Panel
				source="/story/3/4.png"
				position="31 / 1 / 39 / 13"
				display={current_step > 3}
			/>
			<Panel
				source="/story/3/5.png"
				position="39 / 1 / 49 / 6"
				display={current_step > 4}
			/>
			<Panel
				source="/story/3/6a.png"
				position="39 / 6 / 49 / 13"
				display={current_step > 5}
			/>
			<Panel
				source="/story/3/6b.png"
				position="39 / 6 / 49 / 13"
				display={current_step > 6}
			/>
			<Panel
				source="/story/3/6c.png"
				position="39 / 6 / 49 / 13"
				display={current_step > 7}
			/>
			<Panel
				source="/story/3/7a.png"
				position="49 / 1 / 60 / 13"
				display={current_step > 8}
			/>
			<Panel
				source="/story/3/7b.png"
				position="49 / 1 / 60 / 13"
				display={current_step > 9}
			/>
		</Canvas>
	);
}
