import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import { useRouter } from "next/router";

export default function Page() {
  // Controlling the reader's progress.
  const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

  const total_steps = 7; // The number of steps on the page.
  const next_page = "./5"; // Where the next page is located.

  // Push the reader to the next page after the last step.
  if (current_step > total_steps) {
    useRouter().push(next_page);
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
      <Panel source="/story/4/1.png" position="1 / 1 / 11 / 7" display={current_step > 0} />
      <Panel source="/story/4/2.png" position="1 / 7 / 11 / 13" display={current_step > 1} />
      <Panel source="/story/4/3.png" position="11 / 1 / 19 / 13" display={current_step > 2} />
      <Panel source="/story/4/4.png" position="19 / 1 / 27 / 13" display={current_step > 3} />
      <Panel source="/story/4/5a.png" position="27 / 1 / 35 / 6" display={current_step > 4} />
      <Panel source="/story/4/5b.png" position="27 / 1 / 35 / 6" display={current_step > 5} />
      <Panel source="/story/4/6.png" position="27 / 6 / 35 / 13" display={current_step > 6} />
    </Canvas>
  );
}
