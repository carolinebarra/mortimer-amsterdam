import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import facade from '../../images/facade.jpeg';

const Box = styled.div`
	background-color: rgb(18, 60, 56);
	width: 100%;
	position: absolute;
`;
const Container = styled.div`
	position: absolute;
	margin: 10px;
	top: 0px;
	left: 350px;
	padding: 20px;

	color: rgb(252, 253, 217);
`;
const Text = styled.span`
	line-height: 1.6;
`;
const Address = styled.a`
	line-height: 1.6;
	word-break: break-all;

	text-decoration: none;
	color: rgb(252, 253, 217);
`;
const Facade = styled.img`
	margin: 30px;
	height: 200px;
	width: 300px;
`;
const Title = styled.h3`
	color: rgb(252, 253, 217);
`;
export default class Footer extends Component {
	render() {
		return (
			<Box>
				<Row>
					<Col sm={8}>
						<Facade src={facade} />
						<Container>
							<Row>
								<Title>OPEN EVERY DAY!</Title>
							</Row>
							<Row>
								<Text>Monday - Friday 7.30-16.00</Text>
							</Row>
							<Row>
								<Text>Weekends 8.30-17.00</Text>
							</Row>
							<Row>
								<Address href="https://goo.gl/maps/JVfSGEevnGYGBpsg7" target="_blank">
									Nieuwezijds Kolk 33,
									<br /> 1012 PV Amsterdam,
									<br /> Netherlands
								</Address>
							</Row>
							<Row>
								<Address href="tel:31-020-233 2899">+31-020-233 2899</Address>
							</Row>
						</Container>
					</Col>
					<Col sm={4}>
						<Row justify="center">
							<Title> Follow us</Title>
						</Row>
						<Row justify="center"></Row>
					</Col>
				</Row>
			</Box>
		);
	}
}
