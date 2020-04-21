import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import styled from 'styled-components';
import Drinks from '../../images/mortimer-drinks (2).pdf';
import Button from '@material-ui/core/Button';
import Food from '../../images/Minha publicação (1).pdf';

const MyButton = styled.button({
	background: ' rgb(255, 69, 0)',
	border: 0,
	borderRadius: 30,
	boxShadow: '0 3px 5px 2px  rgba(255, 158, 90) ',
	color: 'white',
	height: 48,
	padding: '0 30px',
	margin: 8,
	fontSize: 24
});
const Box = styled.div`
	text-align: center;
	height: 100vh;

	.title {
		color: rgb(18, 60, 56);
	}
`;

export default class Menu extends Component {
	onResumeClick() {
		window.open(Drinks);
	}
	onResumeClick1() {
		window.open(Food);
	}
	render() {
		return (
			<Col lg={12}>
				<Box id="menu">
					<h1 className="title">MENU</h1>

					<a onClick={this.onResumeClick1}>
						<MyButton> Food</MyButton>
					</a>
					<a onClick={this.onResumeClick}>
						<MyButton> Drinks</MyButton>
					</a>
				</Box>
			</Col>
		);
	}
}
