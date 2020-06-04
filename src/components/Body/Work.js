/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Col, Row } from 'react-grid-system';
import staff from '../../images/staff.jpeg';
import staff2 from '../../images/staff2.jpeg';
const Box = styled.div`
	color: #133b38;
`;

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
		font-size: 1.2em;
	}
	h2 {
		padding-top: 58px;
	}
`;
const MyButton = styled.button({
	background: ' rgb(255, 69, 0)',
	border: 0,
	borderRadius: 30,
	boxShadow: '0 3px 5px 2px  rgba(255, 158, 90) ',
	color: 'white',
	height: 48,
	padding: '0 30px',
	margin: 8,
	fontSize: '19px',
	width: '50%'
});

const Work = () => {
	return (
		<Box id="work">
			<Header title={'Work with us'} />
			<Container>
				<Row style={{ padding: '40px' }}>
					<Col lg={4}>
						<img src={staff} alt="staff" />
					</Col>
					<Col lg={4}>
						<img src={staff2} alt="staff2" />
					</Col>

					<Col lg={4} style={{ textAlign: '-webkit-center', paddingLeft: '20px' }}>
						<h2>Join our Team</h2>
						<p>
							We are a group of enthusiastic, hospitable people who provide a professional yet fun service
							without sacrificing quality or results.
						</p>
						<MyButton onClick={() => (window.location.href = `mailto:sayhello@mortimeramsterdam.com`)}>
							Apply Now
						</MyButton>
						<h2>From Mortimer with love</h2>
						<p>Anna, Ricardo, Moes, Martijn, Robbert</p>
					</Col>
				</Row>
			</Container>
		</Box>
	);
};

export default Work;
