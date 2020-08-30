import React, {Component} from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select"
// import  "../../Icons/SelecteDownArrow.png"

storiesOf("Select", module)
    .add("Large Select", () => {
        return <Select placeholder="Select" large/>
    })
    .add("Medium Select", () => {
        return <Select placeholder="Select" medium/>
    })
    .add("Small Select", () => {
        return <Select placeholder="Select" small/>
    })
