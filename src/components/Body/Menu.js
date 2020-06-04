import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Food from '../../images/menu.jpeg';
const Background = styled.img`
	margin-top: 42px;
	max-width: 100%;
	overflow: auto;
	max-height: 100%;
	background-repeat: no-repeat;
	width: 100%;
	object-fit: contain;
`;

const Box = styled.div`
	text-align: center;
	height: 100%;
	background-color: #0d2925;
	color: #8ca99f;

	hr {
		display: block;
		width: 100%;
		background-image: linear-gradient(to right, #ff4500, #333, #8ca99f);
		border: 0;
		height: 2px;
		position: absolute;
	}
`;

export default function Menu() {
	return (
		<Box id="menu">
			<Header title={'Menu'} />
			<Background src={Food} alt="menu" />

			<hr />
		</Box>
	);
}
