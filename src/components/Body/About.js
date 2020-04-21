import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import logo from '../../images/logo-about.jpeg';
import rob from '../../images/rob-about.jpeg';

const Box = styled.div`
	text-align: center;
	height: 100vh;
	background-color: #8ca99f;
	display: flex;
	text-transform: uppercase;
	color: rgb(18, 60, 56);
	.title {
		font-size: 3em;
		padding: 20px;
		:before {
			content: '';
			display: block;
			width: 650px;
			background-color: rgb(18, 60, 56);
			position: absolute;

			height: 3px;
		}
		:after {
			content: '';
			display: block;
			width: 650px;
			background-color: rgb(18, 60, 56);
			height: 3px;
			position: absolute;
		}
	}
	.follow {
		position: relative;
		top: -60px;
		left: 550px;
	}
	.svg {
		position: relative;
		top: -70px;
		left: 550px;
		width: 34px;
		height: 34px;
	}
	.leftBox {
		padding-left: 40px;
		padding-top: 5px;
		padding-bottom: 177px;
		position: relative;
		top: -60px;

		height: 167px;
		text-align: center;
		font-size: 1.4em;
		background-color: rgb(18, 60, 56);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.reviews {
		position: absolute;
		top: 482px;
		left: 40px;
		margin-bottom: 20px;
	}
	.logo {
		position: absolute;
		top: 20px;
		left: 105px;
		width: 100px;
		height: 100px;
	}
	.robAbout {
		img {
			width: 350px;
			position: absolute;
			top: 175px;
			right: 20px;
		}
		.topPara {
			text-align: center;
			font-size: 1.5em;
			position: relative;

			width: 600px;
			color: rgb(18, 60, 56);
			:before {
				content: '';
				display: block;
				width: 220px;
				background-color: rgb(18, 60, 56);
				height: 3px;
				position: absolute;
				top: -15px;
				left: 20px;
			}
			:after {
				content: '';
				display: block;
				width: 220px;
				background-color: rgb(18, 60, 56);
				height: 3px;
				position: absolute;
				top: 90px;
				right: 20px;
			}
		}
		#owner {
			position: absolute;

			color: #f4f3d8;
		}
		#favoriteDish {
			text-align: center;
			font-size: 1.5em;
			position: relative;
			width: 600px;
		}
		.location {
			text-align: center;
			font-size: 1.5em;
			position: relative;

			width: 600px;
			:before {
				content: '';
				display: block;
				width: 220px;
				background-color: rgb(18, 60, 56);
				height: 3px;
				position: absolute;
				top: -15px;
				left: 5px;
			}
			:after {
				content: '';
				display: block;
				width: 220px;
				background-color: rgb(18, 60, 56);
				height: 3px;
				position: absolute;
				top: 180px;
				right: 20px;
			}
		}
	}
`;
export default class Menu extends Component {
	render() {
		return (
			<Box id="about">
				<Helmet>
					<script
						async
						src="https://www.jscache.com/wejs?wtype=cdswritereviewlg&amp;uniq=687&amp;locationId=15242170&amp;lang=en_US&amp;lang=en_US&amp;display_version=2"
						data-loadtrk
						onload="this.loadtrk=true"
					></script>
				</Helmet>

				<Container fluid>
					<Row debug>
						<h1 className="title">All-day brunch @ Mortimer Amsterdam</h1>
						<p className="follow">// Follow Us</p>
						<svg className="svg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
							/>
						</svg>
					</Row>
					<div>
						<p className="leftBox">
							Right in the heart of Amsterdam, at the Nieuwezijds Kolk, you will find Mortimer. The new
							neighbourhood hangout for all-day brunch, local products and the perfect cup of coffee.{' '}
						</p>
						<div className="reviews" id="TA_cdswritereviewlg687" className="TA_cdswritereviewlg">
							<ul id="Os9joSk" className="TA_links kLa7sbiY">
								<li id="TUSL6B" className="QUoxlaeCK">
									<a
										target="_blank"
										href="https://www.tripadvisor.com/Restaurant_Review-g188590-d15242170-Reviews-Mortimer_Amsterdam-Amsterdam_North_Holland_Province.html"
									>
										<img
											src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
											alt="TripAdvisor"
										/>
									</a>
								</li>
							</ul>
						</div>
						<img className="logo" src={logo} alt="logo" />
					</div>

					<div className="robAbout">
						<img src={rob} alt="Robert About" />
						<p className="topPara">
							As a chef, I am used to just doing everything based on my experience. I know how to prepare
							a dish and pop on a busy night. Starting your own business is a different story ...
						</p>
						<p id="owner">- Robert Bergman, Mortimer's Executive Chef.</p>
						<p id="favoriteDish">
							What is your favorite dish? Mortimer's Eggs 'mushrooms on toast'. This dish really creates a
							taste explosion! The combination of crispy mushrooms and a soft egg has a high Umami
							content, or 'taste of deliciousness'.
						</p>
						<p className="location">
							Mortimer is located in the bustle of the center of Amsterdam, but still has a cozy living
							room atmosphere. Between all international fast food & to go chains we provide a personal
							atmosphere, where people can enjoy a nice brunch & good cup of coffee at their leisure. The
							team is also unique: everyone has their own story and contributes with something positive to
							the Mortimer atmosphere in their own way.
						</p>
					</div>
				</Container>
			</Box>
		);
	}
}
