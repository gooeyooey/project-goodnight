import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import { useRouter } from "next/router";

export default function Page() {
  // Controlling the reader's progress.
  const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

  const total_steps = 26; // The number of steps on the page.
  const next_page = "./3"; // Where the next page is located.

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
      <Panel source="/story/6/1.png" position="1 / 1 / 17 / 13" display={current_step > 0} />
      <Panel source="/story/6/2a.png" position="17 / 1 / 25 / 13" display={current_step > 1} />
      <Panel source="/story/6/2b.png" position="17 / 1 / 25 / 13" display={current_step > 2} />
      <Panel source="/story/6/3a.png" position="25 / 1 / 37 / 13" display={current_step > 3} />
      <Panel source="/story/6/3b.png" position="25 / 1 / 37 / 13" display={current_step > 4} />
      <Panel source="/story/6/4.png" position="37 / 1 / 49 / 7" display={current_step > 5} />
      <Panel source="/story/6/5.png" position="37 / 7 / 49 / 13" display={current_step > 6} />
      <Panel source="/story/6/6a.png" position="49 / 1 / 59 / 13" display={current_step > 7} />
      <Panel source="/story/6/6b.png" position="49 / 1 / 59 / 13" display={current_step > 8} />
      <Panel source="/story/6/7.png" position="59 / 1 / 71 / 5" display={current_step > 9} />
      <Panel source="/story/6/8.png" position="59 / 5 / 71 / 13" display={current_step > 10} />
      <Panel source="/story/6/9.png" position="71 / 1 / 79 / 13" display={current_step > 11} />
      <Panel source="/story/6/10a.png" position="79 / 1 / 87 / 13" display={current_step > 12} />
      <Panel source="/story/6/10b.png" position="79 / 1 / 87 / 13" display={current_step > 13} />
      <Panel source="/story/6/11.png" position="87 / 1 / 93 / 13" display={current_step > 14} />
      <Panel source="/story/6/12.png" position="93 / 1 / 99 / 13" display={current_step > 15} />
      <Panel source="/story/6/13.png" position="99 / 1 / 111 / 13" display={current_step > 16} />
    </Canvas>
  );
}
