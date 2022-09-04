import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import ReactHowler from "react-howler";

export default function Panel({ display, position, source, type, style }) {
	return (
		<Container
			// Pass style properties to the Container <div>.
			style={{
				"--gridArea": position,
				"--visibility": display ? "initial" : "none",
			}}
		>
			{type == "image" ? <img src={source} /> : null}
			{type == "text" ? <div style={style}>{source}</div> : null}
			{type == "video" ? (
				<ReactPlayer
					width={"100%"}
					height={"100%"}
					url={source}
					playing={display ? true : false}
				/>
			) : null}

			{type == "sound" ? (
				<ReactHowler src={source} playing={display ? true : false} />
			) : null}
		</Container>
	);
}

const Container = styled.div`
	grid-area: var(--gridArea);
	display: var(--visibility);

	& > * {
		height: 100%;
		width: 100%;
	}
`;
