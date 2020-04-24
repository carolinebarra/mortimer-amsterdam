import React from 'react';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import Body from './Body/Body';

export default class LandingPage extends React.Component {
	state = {
		navbarOpen: false
	};
	handleNavbar = () => {
		this.setState({ navbarOpen: !this.state.navbarOpen });
	};
	render() {
		return (
			<div>
				<Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar} />
				<Body />
				{/* <Footer /> */}
			</div>
		);
	}
}
