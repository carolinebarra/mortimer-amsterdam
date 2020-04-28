/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/mortimer-svg.svg';
const Container = styled.div`
	display: grid;
	grid-template-columns: 150px 218px;
	text-align: center;
	img {
		width: 100px;
		justify-self: self-end;
		padding-bottom: 15px;
		padding-top: 15px;
	}
	h1 {
		padding-top: 43px;
		font-size: 2.3em;
	}
	hr {
		display: block;
		width: 100%;
		background-image: linear-gradient(to right, #ff4500, #333, #8ca99f);
		border: 0;
		height: 2px;
		position: absolute;
	}
`;

const Header = (props) => {
	return (
		<Container>
			<img src={logo} alt="logo" />
			<h1>// {props.title}</h1>
			<div>
				<hr />
			</div>
		</Container>
	);
};
export default Header;
