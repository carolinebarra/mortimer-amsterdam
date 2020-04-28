import React from 'react';
import Navbar from './Navigation/Navbar';
import Contact from './Contact/Contact';
import styled from 'styled-components';
import Body from './Body/Body';

const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

export default class LandingPage extends React.Component {
	state = {
		navbarOpen: false
	};
	handleNavbar = () => {
		this.setState({ navbarOpen: !this.state.navbarOpen });
	};
	render() {
		return (
			<Container>
				<Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar} />
				<Body />
				<Contact />
			</Container>
		);
	}
}
