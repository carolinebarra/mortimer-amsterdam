import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
	padding: 30px 20px;
	font-weight: 600;
	font-size: 2em;
	text-transform: uppercase;
	box-shadow: rgb(74, 77, 76);
	text-decoration: none;
	color: rgb(252, 253, 217);
	:hover {
		border-bottom: 1px solid rgb(255, 69, 0);
		box-shadow: gray;
		transition: var(--transition-delay);
	}
`;
const Title = styled.span`
	color: rgb(252, 253, 217);
`;
const Link = styled.a`
	text-decoration: none;
`;

const NavigationItem = (props) => {
	return (
		<Container>
			<Link href={props.title} onClick={console.log('Clicked')}>
				<Title>{props.title}</Title>
			</Link>
		</Container>
	);
};

export default NavigationItem;
