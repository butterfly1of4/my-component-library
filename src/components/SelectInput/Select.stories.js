import React, {Component} from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select"
// import  "../../Icons/SelecteDownArrow.png"

storiesOf("Select", module)
    .add("Large Select", () => {
        return <Select placeholder="Select" label="Large" large/>
    })
    .add("Medium Select", () => {
        return <Select placeholder="Select" label="Medium" medium/>
    })
    .add("Small Select", () => {
        return <Select placeholder="Select" label="Small" small/>
    })
