import React, { Component } from 'react';
import { Col, Row } from 'react-grid-system';
import background from '../../images/mortimer-background.jpg';
import name from '../../images/mortimer-svg.svg';
import styled from 'styled-components';
import Menu from './Menu';
import About from './About';
import Gallery from './Gallery';
import Work from './Work';
//import { Map, Market, GoogleApiWrapper } from 'google-maps-react';

const Overlay = styled.div`
	position: absolute;
	top: 5rem;
	left: 0;
	height: 93vh;
	width: 100%;
	opacity: 0.5;
	z-index: 1;
	background-color: black;
`;

const Background = styled.img`
	width: 100%;
	height: 100vh;
	z-index: 1;
`;

const Name = styled.img`
	z-index: 2;
	width: 15%;
	mix-blend-mode: darken;
	position: absolute;
	top: 32vh;
	left: 50.5%;
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
						<Overlay />
						<Background src={background} />
						<Name src={name} />
					</Container>
				</Row>
				<Row style={{ backgroundColor: '#8ca99f' }}>
					<About />
				</Row>
				<Row></Row>
				<Menu />
				<Work />
				<Gallery />
			</Col>
		);
	}
}
