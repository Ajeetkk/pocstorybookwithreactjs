import React from "react";
import { Button } from "@storybook/react/demo";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import App from "../.././App";
import Progressbar from "../.././Progressbar";
export default { title: "Button" };
export const withText = () => (
  <Button onClick={action("button-click")}>Hello World!</Button>
);
export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
export const onClicEvent = () => (
  <Button onClick={action("button-click")}>Hello World!</Button>
);
export const xyz = () => <App />;
storiesOf("Button", module).add("test", () => (
  <Button onClick={() => console.log("clicked")}>Hello Button</Button>
));
storiesOf("Demo", module).add("testing", () => {
  return (
    <div>
      <Button onClick={() => action("clicked")}>Action</Button>
      <Button onClick={() => console.log("clicked")}>Console</Button>
      <button onClick={action("clicked")}>Action</button>
      <button onClick={() => console.log("clicked")}>Console</button>
    </div>
  );
});
storiesOf("Progress", module).add("progress", () => {
  return (
      <Progressbar />
  );
});
