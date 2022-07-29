import React from "react";
import Canvas from "../../components/story/canvas";
import Panel from "../../components/story/panel";
import { useRouter } from "next/router";

export default function Page() {
  // Controlling the reader's progress.
  const [current_step, set_step] = React.useState(1); // Controller for the reader's current step.

  const total_steps = 36; // The number of steps on the page.
  const next_page = "./A"; // Where the next page is located.

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
      <Panel source="/story/5/1a.png" position="1 / 1 / 9 / 13" display={current_step > 0} />
      <Panel source="/story/5/1b.png" position="1 / 1 / 9 / 13" display={current_step > 1} />
      <Panel source="/story/5/2a.png" position="9 / 1 / 17 / 13" display={current_step > 2} />
      <Panel source="/story/5/2b.png" position="9 / 1 / 17 / 13" display={current_step > 3} />
      <Panel source="/story/5/2c.png" position="9 / 1 / 17 / 13" display={current_step > 4} />
      <Panel source="/story/5/3.png" position="17 / 1 / 23 / 13" display={current_step > 5} />
      <Panel source="/story/5/4.png" position="23 / 1 / 35 / 13" display={current_step > 6} />
      <Panel source="/story/5/5a.png" position="35 / 1 / 43 / 13" display={current_step > 7} />
      <Panel source="/story/5/5b.png" position="35 / 1 / 43 / 13" display={current_step > 8} />
      <Panel source="/story/5/6a.png" position="43 / 1 / 51 / 13" display={current_step > 9} />
      <Panel source="/story/5/6b.png" position="43 / 1 / 51 / 13" display={current_step > 10} />
      <Panel source="/story/5/6c.png" position="43 / 1 / 51 / 13" display={current_step > 11} />
      <Panel source="/story/5/7.png" position="51 / 1 / 61 / 8" display={current_step > 12} />
      <Panel source="/story/5/8.png" position="51 / 8 / 61 / 13" display={current_step > 13} />
      <Panel source="/story/5/9.png" position="61 / 1 / 75 / 13" display={current_step > 14} />
      <Panel source="/story/5/10a.png" position="75 / 1 / 85 / 6" display={current_step > 15} />
      <Panel source="/story/5/10b.png" position="75 / 1 / 85 / 6" display={current_step > 16} />
      <Panel source="/story/5/11.png" position="75 / 6 / 85 / 13" display={current_step > 17} />
      <Panel source="/story/5/12a.png" position="85 / 1 / 93 / 13" display={current_step > 18} />
      <Panel source="/story/5/12b.png" position="85 / 1 / 93 / 13" display={current_step > 19} />
      <Panel source="/story/5/13.png" position="93 / 1 / 103 / 13" display={current_step > 20} />
      <Panel source="/story/5/14.png" position="103 / 1 / 111 / 13" display={current_step > 21} />
      <Panel source="/story/5/15.png" position="111 / 1 / 121 / 6" display={current_step > 22} />
      <Panel source="/story/5/16.png" position="111 / 6 / 121 / 13" display={current_step > 23} />
      <Panel source="/story/5/17a.png" position="121 / 1 / 127 / 13" display={current_step > 24} />
      <Panel source="/story/5/17b.png" position="121 / 1 / 127 / 13" display={current_step > 25} />
      <Panel source="/story/5/18.png" position="127 / 1 / 141 / 13" display={current_step > 26} />
      <Panel source="/story/5/19a.png" position="141 / 1 / 149 / 13" display={current_step > 27} />
      <Panel source="/story/5/19b.png" position="141 / 1 / 149 / 13" display={current_step > 28} />
      <Panel source="/story/5/20a.png" position="149 / 1 / 159 / 6" display={current_step > 29} />
      <Panel source="/story/5/20b.png" position="149 / 1 / 159 / 6" display={current_step > 30} />
      <Panel source="/story/5/21.png" position="149 / 6 / 159 / 13" display={current_step > 31} />
      <Panel source="/story/5/22.png" position="159 / 1 / 167 / 13" display={current_step > 32} />
      <Panel source="/story/5/23a.png" position="167 / 1 / 173 / 13" display={current_step > 33} />
      <Panel source="/story/5/23b.png" position="167 / 1 / 173 / 13" display={current_step > 34} />
      <Panel source="/story/5/24.png" position="173 / 1 / 189 / 13" display={current_step > 35} />
    </Canvas>
  );
}
