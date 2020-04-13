import React from 'react';
import { Link } from 'react-scroll';
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

const NavigationItem = (props) => {
	return (
		<Container>
			<Link activeClass="active" to={props.id} spy={true} smooth={true} offset={0} duration={500}>
				<Title>{props.title}</Title>
			</Link>
		</Container>
	);
};

export default NavigationItem;
