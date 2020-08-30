import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";

storiesOf("Text", module)
  .add("Small Email", () => {
    return <Text type="text" small placeholder="Email" label="Email" />
  })
  .add("Medium Email", () => {
    return <Text type="text" medium placeholder="Email" label="Email" />
  })
  .add("Large Email", () => {
    return <Text type="text" large placeholder="Email" label="Email" />
  });
