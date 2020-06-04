/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import Header from '../Body/Header';
import { Col, Row } from 'react-grid-system';
import maps from '../../images/googlemaps.png';
import SocialMedia from './SocialMedia';
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight';
import { Clock } from '@styled-icons/evil/Clock';

const Container = styled.div`
	background-color: #0d2925;
	color: #8ca99f;
	letter-spacing: 0.5px;

	font-size: 1.1em;
	margin-top: 20px;
	line-height: 60px;
	justify-self: flex-start;
	width: 100%;
	position: absolute;

	svg {
		width: 50px;
		height: 50px;
	}
	text-decoration: none;
	#reservations {
		color: #ff4500;
	}
	a {
		text-decoration: none;
		color: #8ca99f;
		svg {
			color: #ff4500;
			height: 49px;
			width: 50px;
			position: relative;
		}
		p {
			color: #8ca99f;
			color: #8ca99f;
			float: left;
			margin-top: -62px;
		}
	}
	.address {
		p {
			line-height: 21px;
		}
	}
`;

const Map = styled.img`
	width: 100%;
	position: relative;

	padding: 27px 0px;
	border-radius: 20px;
`;

function Contact() {
	return (
		<Container id="contact">
			<Header title="CONTACT US" />
			<Row style={{ padding: '39px' }}>
				<Col lg={3} align="center">
					<ContactForm />
				</Col>
				<Col lg={6} align="center" style={{ paddingLeft: '47px' }}>
					<h1>How to find us</h1>
					<Map src={maps} alt="maps" />
					<a
						href="https://www.google.com/maps/place/Mortimer/@52.376161,4.8916633,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6098f407986cf:0xf9d9d4b5ee4402f7!8m2!3d52.376161!4d4.893852"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>
							Open in Google Maps
							<KeyboardArrowRight />
						</p>
					</a>
					<div>
						<p id="reservations">
							// Please give us a call to reserve a table{''}
							<a style={{ fontSize: '20px' }} href="tel:31-020-233 2899">
								<hr />
								+31 (0) 20 233 2899
							</a>
						</p>
					</div>
				</Col>
				<Col lg={2} align="center" style={{ paddingLeft: '30px', paddingRight: '0px', maxWidth: ' 24.6667%' }}>
					<h1>
						<Clock />
						OPENING HOURS
					</h1>
					<div>
						<p>Monday - Friday: 7:30-16:00</p>
						<p>Weekends: 8:30-16:00</p>

						<p style={{ lineHeight: '28px' }}>
							Nieuwezijds Kolk 33
							<br /> 1012 PV Amsterdam
						</p>
					</div>

					<SocialMedia />
				</Col>
			</Row>
		</Container>
	);
}

export default Contact;
