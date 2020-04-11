import React, { Component } from 'react';
import { Row } from 'react-grid-system';
import background from '../../images/mortimer-background.jpg';
import name from '../../images/mortimer-name.jpg';
import styled from 'styled-components';
import Menu from './Menu';
//import { Map, Market, GoogleApiWrapper } from 'google-maps-react';

const Background = styled.img`
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const Name = styled.img`
	z-index: 2;
	position: absolute;
	mix-blend-mode: darken;
	left: 400px;
	bottom: 578px;
	transform: rotate(-39deg);
`;

export default class Body extends Component {
	render() {
		return (
			<Row>
				<Background src={background} />
				<Name src={name} />
				<Menu />
			</Row>
		);
	}
}
