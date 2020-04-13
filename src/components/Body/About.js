import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import styled from 'styled-components';

const Box = styled.div`
	text-align: center;
	height: 100vh;
`;
export default class Menu extends Component {
	render() {
		return (
			<Col lg={12}>
				<Box id="about">
					<h1>About</h1>
				</Box>
			</Col>
		);
	}
}
