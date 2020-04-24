import React from 'react';
import styled from 'styled-components';
import Brand from '../Navigation/Brand';
import logo from '../../images/mortimer-svg.svg';
const Container = styled.div`
	display: grid;
	grid-template-columns: 150px 120px;

	color: #143b38;

	img {
		width: 100px;
		justify-self: self-end;
		padding-bottom: 15px;
		padding-top: 15px;
	}
	h1 {
		padding-top: 53px;
		font-size: 1.3em;
	}
	hr {
		display: block;
		width: 100%;
		border: 2px solid #ff4500;

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
