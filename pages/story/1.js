import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import Sound from "../../components/story/sound";
import Router from "next/router";
import Head from "next/head";

export default function Page() {
	// Controlling the reader's progress.
	const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

	const total_steps = 26; // The number of steps on the page.
	const next_page = "./2"; // Where the next page is located.

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
				source="/story/1/1.png"
				position="1 / 1 / 17 / 13"
				display={current_step > 0}
			/>
			<Panel
				source="/story/1/2.png"
				position="17 / 1 / 21 / 7"
				display={current_step > 1}
			/>
			<Panel
				source="/story/1/3.png"
				position="17 / 7 / 21 / 13"
				display={current_step > 2}
			/>
			<Panel
				source="/story/1/4.png"
				position="21 / 1 / 29 / 13"
				display={current_step > 3}
			/>
			<Panel
				source="/story/1/5a.png"
				position="29 / 1 / 39 / 9"
				display={current_step > 4}
			/>
			<Panel
				source="/story/1/5b.png"
				position="29 / 1 / 39 / 9"
				display={current_step > 5}
			/>
			<Sound
				source="/story/1/sound/ringtone.mp3"
				play={current_step == 6 ? true : false}
			/>
			<Panel
				source="/story/1/6.png"
				position="29 / 9 / 39 / 13"
				display={current_step > 6}
			/>
			<Panel
				source="/story/1/7a.png"
				position="39 / 1 / 47 / 13"
				display={current_step > 7}
			/>
			<Panel
				source="/story/1/7b.png"
				position="39 / 1 / 47 / 13"
				display={current_step > 8}
			/>
			<Panel
				source="/story/1/7c.png"
				position="39 / 1 / 47 / 13"
				display={current_step > 9}
			/>
			<Panel
				source="/story/1/7d.png"
				position="39 / 1 / 47 / 13"
				display={current_step > 10}
			/>
			<Panel
				source="/story/1/7e.png"
				position="39 / 1 / 47 / 13"
				display={current_step > 11}
			/>
			<Panel
				source="/story/1/8.png"
				position="47 / 1 / 57 / 7"
				display={current_step > 12}
			/>
			<Panel
				source="/story/1/9a.png"
				position="47 / 7 / 57 / 13"
				display={current_step > 13}
			/>
			<Panel
				source="/story/1/9b.png"
				position="47 / 7 / 57 / 13"
				display={current_step > 14}
			/>
			<Panel
				source="/story/1/10.png"
				position="57 / 1 / 67 / 13"
				display={current_step > 15}
			/>
			<Panel
				source="/story/1/11.png"
				position="67 / 1 / 77 / 6"
				display={current_step > 16}
			/>
			<Panel
				source="/story/1/12.png"
				position="67 / 6 / 77 / 13"
				display={current_step > 17}
			/>
			<Panel
				source="/story/1/13a.png"
				position="77/ 1 / 85 / 13"
				display={current_step > 18}
			/>
			<Panel
				source="/story/1/13b.png"
				position="77/ 1 / 85 / 13"
				display={current_step > 19}
			/>
			<Panel
				source="/story/1/13c.png"
				position="77/ 1 / 85 / 13"
				display={current_step > 20}
			/>
			<Panel
				source="/story/1/13d.png"
				position="77/ 1 / 85 / 13"
				display={current_step > 21}
			/>
			<Panel
				source="/story/1/13e.png"
				position="77/ 1 / 85 / 13"
				display={current_step > 22}
			/>
			<Panel
				source="/story/1/13f.png"
				position="77/ 1 / 85 / 13"
				display={current_step > 23}
			/>
			<Panel
				source="/story/1/14.png"
				position="85/ 1 / 89 / 13"
				display={current_step > 24}
			/>
			<Panel
				source="/story/1/15.png"
				position="89/ 1 / 105 / 13"
				display={current_step > 25}
			/>
		</Canvas>
	);
}
