/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { Col, Row } from 'react-grid-system';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import logo from '../../images/mortimer-svg.svg';
import rob from '../../images/rob-about.jpeg';
import { Instagram } from '@styled-icons/fa-brands/Instagram';

const Box = styled.div`
	text-align: center;
	height: 100%;
	overflow: hidden;
	text-transform: uppercase;

	color: rgb(18, 60, 56);
	.title {
		font-size: 3em;
		text-decoration: overline underline;
		text-underline-position: under;
	}
	.follow {
		font-size: 3em;
	}

	.leftBox {
		text-align: center;
		font-size: 28px;
	}

	.logo {
		width: 100px;
		height: 100px;
	}
	.robPic {
		width: 350px;
	}

	.topPara {
		text-align: center;
		font-size: 34px;
		position: relative;
		height: 100%;
		padding: 15px;
		color: rgb(18, 60, 56);
		p {
			margin-top: 2px;
			margin-bottom: 2px;
		}

		@media screen and (min-width 600px) {
			padding-left: 29px;
		}
	}
	#owner {
		color: #f4f3d8;
		text-align-last: left;
	}
`;

const Gram = styled(Instagram)`
	width: 35px;
	height: 35px;
	color: rgb(18, 60, 56);
	display: inline-block;
`;
const LineR = styled.hr`
	width: 50%;
	text-align-last: right;
	border: 1px solid rgb(18, 60, 56);
`;
export default class Menu extends Component {
	render() {
		return (
			<Col lg={12}>
				<Box id="about">
					<Helmet>
						<script
							async
							src="https://www.jscache.com/wejs?wtype=cdswritereviewlg&amp;uniq=687&amp;locationId=15242170&amp;lang=en_US&amp;lang=en_US&amp;display_version=2"
							data-loadtrk
							onload="this.loadtrk=true"
						></script>
					</Helmet>
					<Row style={{ padding: '15px' }}>
						<Col lg={2}>
							<img className="logo" src={logo} alt="logo" />
						</Col>
						<Col lg={7} align="center">
							<h1 className="title">All-day brunch @ Mortimer Amsterdam</h1>
						</Col>
						<Col lg={3} style={{ padding: '0px' }}>
							<p className="follow">// Follow Us</p>
							<a
								className="instagram"
								href="https://www.instagram.com/mortimeramsterdam/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Gram />
							</a>
						</Col>
					</Row>
					<Row>
						<Col lg={2} style={{ paddingLeft: '40px' }}>
							<Row style={{ marginLeft: '0px', marginRight: '0px' }}>
								<p className="leftBox">
									Right in the heart of Amsterdam, at the Nieuwezijds Kolk, you will find Mortimer.
									The new neighbourhood hangout for all-day brunch, local products and the perfect cup
									of coffee.
								</p>
							</Row>
							<Row style={{ justifyContent: 'center' }}>
								<div id="TA_cdswritereviewlg687" className="TA_cdswritereviewlg">
									<ul id="Os9joSk" className="TA_links kLa7sbiY">
										<li id="TUSL6B" className="QUoxlaeCK">
											<a
												target="_blank"
												href="https://www.tripadvisor.com/Restaurant_Review-g188590-d15242170-Reviews-Mortimer_Amsterdam-Amsterdam_North_Holland_Province.html"
												rel="noopener noreferrer"
											>
												<img
													src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
													alt="TripAdvisor"
												/>
											</a>
										</li>
									</ul>
								</div>
							</Row>
						</Col>
						<Col lg={7} className="topPara">
							<p>
								<LineR />
								As a chef, I am used to just doing everything based on my experience. I know how to
								prepare a dish and pop on a busy night. Starting your own business is a different story
								...
								<LineR />
							</p>
							<p id="owner">- Robert Bergman, Mortimer's Executive Chef.</p>
							<p>
								What is your favorite dish? Mortimer's Eggs 'mushrooms on toast'. This dish really
								creates a taste explosion! The combination of crispy mushrooms and a soft egg has a high
								Umami content, or 'taste of deliciousness'.
								<LineR />
							</p>

							<p>
								Mortimer is located in the bustle of the center of Amsterdam, but still has a cozy
								living room atmosphere. Between all international fast food & to go chains we provide a
								personal atmosphere, where people can enjoy a nice brunch & good cup of coffee at their
								leisure. The team is also unique: everyone has their own story and contributes with
								something positive to the Mortimer atmosphere in their own way.
								<LineR />
							</p>
						</Col>
						<Col lg={2}>
							<img className="robPic" src={rob} alt="Robert About" />
						</Col>
					</Row>
				</Box>
			</Col>
		);
	}
}
