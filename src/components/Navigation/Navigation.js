import React, { Component } from 'react';
import logo from '../../images/logo.jpeg';

import styled from 'styled-components';
import NavigationItem from './NavigationItem';
const Logo = styled.img`
	width: 132px;
	position: absolute;
	top: 5px;
	writing-mode: vertical-lr;
`;

const Container = styled.div`
	background-color: rgb(18, 60, 56);
	height: 90px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;
const navItems = [
	{ title: 'Home' },
	{ title: 'About' },
	{ title: 'Menu' },
	{ title: 'Contact' },
	{ title: 'Work with Us' }
];
export default class Navigation extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} />

				{navItems.map((navItem) => (
					<NavigationItem title={navItem.title} key={navItem.title} />
				))}
			</Container>
		);
	}
}
