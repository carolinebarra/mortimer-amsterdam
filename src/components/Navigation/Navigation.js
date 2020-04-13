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
	{
		title: 'Home',
		id: 'home'
	},
	{
		title: 'About',
		id: 'about'
	},
	{
		title: 'Menu',
		id: 'menu'
	},
	{
		title: 'Contact',
		id: 'contact'
	},
	{
		title: 'Work with Us',
		id: 'work'
	}
];
export default class Navigation extends Component {
	render() {
		return (
			<Container>
				<Logo src={logo} />

				{navItems.map((navItem) => (
					<NavigationItem title={navItem.title} key={navItem.title} id={navItem.id} />
				))}
			</Container>
		);
	}
}
