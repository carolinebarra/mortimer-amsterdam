import React from 'react';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/fa-brands/Facebook';

import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Spotify } from '@styled-icons/fa-brands/Spotify';
import { Tripadvisor } from '@styled-icons/fa-brands/Tripadvisor';
const Container = styled.div`
	display: flex;
	padding: 0;
	align-content: flex-start;
	padding-top: 123px;
`;

const Link = styled.a`
	color: rgb(255, 69, 0);

	svg {
		width: 49px;
		height: 60px;
	}
`;
export default class SocialMedia extends React.Component {
	render() {
		return (
			<Container>
				<Link
					href="https://open.spotify.com/playlist/5F8M6COEpkPBYFmIyTfdGV?si=XZd9tLJdT0-99ZRgUJh0oQ"
					target="_blank"
				>
					<Spotify />
				</Link>
				<Link href="https://www.instagram.com/mortimeramsterdam/" target="_blank">
					<Instagram />
				</Link>
				<Link href="https://www.facebook.com/MortimerAmsterdam/" target="_blank">
					<Facebook />
				</Link>
				<Link
					href="https://www.tripadvisor.com/Restaurant_Review-g188590-d15242170-Reviews-Mortimer_Amsterdam-Amsterdam_North_Holland_Province.html"
					target="_blank"
				>
					<Tripadvisor />
				</Link>
			</Container>
		);
	}
}
