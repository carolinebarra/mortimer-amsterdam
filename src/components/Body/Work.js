/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Col, Row } from 'react-grid-system';
import staff from '../../images/staff.jpeg';
import staff2 from '../../images/staff2.jpeg';

const Container = styled.div`
	text-align: center;
	height: 100%;
	overflow: hidden;
	text-transform: uppercase;
	color: #133b38;
	img {
		width: 300px;
		border: #8c9c9a 2px solid;
	}
	p {
		padding-top: 58px;
		font-size: 1.1em;
	}
	button {
		background-color: #133b38;
		color: #f4f3d8;
		font-size: 0.8em;
		padding: 15px;
		margin-top: 15px;
		border-radius: 29px;
		cursor: pointer;
	}
`;

const Work = () => {
	return (
		<div id="work">
			<Header title={'Work with us'} />
			<Container>
				<Row style={{ padding: '40px' }}>
					<Col lg={4}>
						<img src={staff} alt="staff" />
					</Col>
					<Col lg={4}>
						<img src={staff2} alt="staff2" />
					</Col>

					<Col lg={4} style={{ textAlign: '-webkit-center' }}>
						<h2>Join our Team</h2>
						<p>
							We are a group of enthusiastic, hospitable people who provide a professional yet fun service
							without sacrificing quality or results.
						</p>
						<button onClick={() => (window.location.href = `mailto:sayhello@mortimeramsterdam.com`)}>
							Apply Now
						</button>
						<p>From Mortimer with love</p>
						<p>Anna, Ricardo, Aidan, Allard, Moes, Martijn, Robert</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Work;
