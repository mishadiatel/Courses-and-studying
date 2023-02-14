import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
    console.log('Demo Output running');
    return <MyParagraph>{props.show ? 'this is new' : ''}</MyParagraph>
}

export default DemoOutput;