import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import Router from "next/router";
import Head from "next/head";

export default function Page() {
	// Controlling the reader's progress.
	const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

	const total_steps = 25; // The number of steps on the page.
	const next_page = "./3"; // Where the next page is located.

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
				source="/story/2/1.png"
				position="1 / 1 / 12 / 7"
				display={current_step > 0}
			/>
			<Panel
				source="/story/2/2.png"
				position="1 / 7 / 12 / 13"
				display={current_step > 1}
			/>
			<Panel
				source="/story/2/3a.png"
				position="12 / 1 / 21 / 13"
				display={current_step > 2}
			/>
			<Panel
				source="/story/2/3b.png"
				position="12 / 1 / 21 / 13"
				display={current_step > 3}
			/>
			<Panel
				source="/story/2/3c.png"
				position="12 / 1 / 21 / 13"
				display={current_step > 4}
			/>
			<Panel
				source="/story/2/3d.png"
				position="12 / 1 / 21 / 13"
				display={current_step > 5}
			/>
			<Panel
				source="/story/2/4.png"
				position="21 / 1 / 32 / 13"
				display={current_step > 6}
			/>
			<Panel
				source="/story/2/5a.png"
				position="32 / 1 / 39 / 13"
				display={current_step > 7}
			/>
			<Panel
				source="/story/2/5b.png"
				position="32 / 1 / 39 / 13"
				display={current_step > 8}
			/>
			<Panel
				source="/story/2/6.png"
				position="39 / 1 / 62 / 13"
				display={current_step > 9}
			/>
			<Panel
				source="/story/2/7.png"
				position="62 / 1 / 68 / 13"
				display={current_step > 10}
			/>
			<Panel
				source="/story/2/8.png"
				position="68 / 1 / 76 / 13"
				display={current_step > 11}
			/>
			<Panel
				source="/story/2/9a.png"
				position="76 / 1 / 83 / 7"
				display={current_step > 12}
			/>
			<Panel
				source="/story/2/9b.png"
				position="76 / 1 / 83 / 13"
				display={current_step > 13}
			/>
			<Panel
				source="/story/2/10.png"
				position="83 / 1 / 93 / 6"
				display={current_step > 14}
			/>
			<Panel
				source="/story/2/11a.png"
				position="83 / 6 / 93 / 13"
				display={current_step > 15}
			/>
			<Panel
				source="/story/2/11b.png"
				position="83 / 6 / 93 / 13"
				display={current_step > 16}
			/>
			<Panel
				source="/story/2/12.png"
				position="93/ 1 / 103 / 8"
				display={current_step > 17}
			/>
			<Panel
				source="/story/2/13.png"
				position="93/ 8 / 103 / 13"
				display={current_step > 18}
			/>
			<Panel
				source="/story/2/14a.png"
				position="103/ 1 / 113 / 6"
				display={current_step > 19}
			/>
			<Panel
				source="/story/2/14b.png"
				position="103/ 1 / 113 / 6"
				display={current_step > 20}
			/>
			<Panel
				source="/story/2/15a.png"
				position="103/ 6 / 113 / 13"
				display={current_step > 21}
			/>
			<Panel
				source="/story/2/15b.png"
				position="103/ 6 / 113 / 13"
				display={current_step > 22}
			/>
			<Panel
				source="/story/2/16.png"
				position="113/ 1 / 125 / 13"
				display={current_step > 23}
			/>
		</Canvas>
	);
}
