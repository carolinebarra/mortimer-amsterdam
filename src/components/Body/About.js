/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import Header from './Header';
import rob from '../../images/rob-about.jpeg';
import facade from '../../images/facade2.jpeg';
import { Tripadvisor } from '@styled-icons/fa-brands/Tripadvisor';

const Container = styled.div`
	width: 100%;
	text-align: center;
	justify-items: center;
	align-items: start;
	background-color: #8caa9c;
	color: #133b35;

	letter-spacing: 1px;
	h3 {
		padding: 35px;
		align-items: center;
		text-align: center;
		font-size: 1.3em;
		letter-spacing: 0.6px;
	}
	h4 {
		border-bottom: #f7edd1 1px solid;
		padding-bottom: 5px;
	}
	p {
		padding: 20px 30px 0px 0px;

		letter-spacing: 0.6px;
	}
	svg {
		color: #f7edd1;
		width: 52px;
		&:hover {
			color: rgb(255, 69, 0);
		}
	}
`;
const Img = styled.img`
	width: 314px;
	border: #f7edd1 2px solid;
`;
function About() {
	return (
		<Container id="about">
			<Header title="About Us" />
			<h3>
				Mortimer is the new hangout for the neighborhood in the heart of Amsterdam. Despite being in the bustle
				of the center, we still have a cozy living room atmosphere. We serve all day brunch, good coffee &
				attention for our guests. Our goal is to create a homely place for the neighborhood and other catering
				entrepreneurs, where passion and love is reflected in the all-day brunch. We look forward to welcoming
				you!
			</h3>
			<Row style={{ padding: '40px' }}>
				<Col lg={4}>
					<Img src={facade} alt="facade" />
				</Col>
				<Col lg={4}>
					<Img src={rob} alt="Rob" />
				</Col>

				<Col lg={4} style={{ textAlign: '-webkit-center' }}>
					<h4>// Our Suppliers</h4>
					<p>
						We only work with local suppliers who have high-quality craft products and tell a good story.
						Our herbs come from Vanilla Ventures, tomatoes for our chutney from the nursery in Osdorp, fresh
						bread from the MAMA bakery and the juices from Brandstof. With these products we deliver a
						memorable brunch for everyone. In addition, our suppliers do not work with mass production,
						which is well suited to the Mortimer concept.
					</p>{' '}
					<br />
					<h4>// Our favourite dish</h4>
					<p>
						Mortimer's Eggs 'mushrooms on toast'. <br />
						This dish really creates a taste explosion! The combination of crispy mushrooms and a soft egg
						has a high Umami content, or 'taste of deliciousness'.
					</p>{' '}
					<br />
					<h4>// Check out what people are saying about us</h4>
					<a
						href="https://www.tripadvisor.com/Restaurant_Review-g188590-d15242170-Reviews-Mortimer_Amsterdam-Amsterdam_North_Holland_Province.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Tripadvisor />
					</a>
				</Col>
			</Row>
		</Container>
	);
}
export default About;
