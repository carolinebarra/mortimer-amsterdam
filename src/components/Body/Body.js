import React, { Component } from 'react';
import { Col, Row } from 'react-grid-system';
import background from '../../images/mortimer-background.jpg';
import name from '../../images/mortimer-name.jpg';
import styled from 'styled-components';
import Menu from './Menu';
import About from './About';
import Gallery from './Gallery';
//import { Map, Market, GoogleApiWrapper } from 'google-maps-react';

const Background = styled.img`
	width: 100%;
	height: 100vh;
	z-index: 1;
`;

const Name = styled.img`
	z-index: 2;
	width: 100%;
	mix-blend-mode: darken;
	position: absolute;
	top: 25vh;
	left: 12.5%;

	transform: rotate(-39deg);
`;
const Container = styled.div`
	height: 100%;
	max-height: 100%;

	width: 100%;
`;
export default class Body extends Component {
	render() {
		return (
			<Col lg={12}>
				<Row>
					<Container>
						<Background src={background} />
						<Name src={name} />
					</Container>
				</Row>
				<Row style={{ backgroundColor: '#8ca99f' }}>
					<About />
				</Row>
				<Row></Row>
				<Menu />

				<Gallery />
			</Col>
		);
	}
}
