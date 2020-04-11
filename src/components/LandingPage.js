import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Body from './Body/Body';

export default class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				<Body />
				<Footer />
			</div>
		);
	}
}
