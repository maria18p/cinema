import React from "react";
import ContentView from "./ContentView";

const Content = (props) => {
	return <ContentView content={props.content} data={props.data} />;
};

export default Content;
