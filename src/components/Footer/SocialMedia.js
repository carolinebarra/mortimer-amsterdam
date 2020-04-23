import React from 'react';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Mail } from '@styled-icons/heroicons-solid/Mail';
import { Instagram } from '@styled-icons/fa-brands/Instagram';

const Container = styled.div`
	display: flex;
`;

const Link = styled.a`
	margin: 1rem;
	color: rgb(255, 69, 0);
	width: 32px;
	height: 32px;
`;
export default class SocialMedia extends React.Component {
	render() {
		return (
			<Container>
				<Link href="mailto:sayhello@mortimeramsterdam.com" target="_blank">
					<Mail />
				</Link>
				<Link href="https://www.instagram.com/mortimeramsterdam/" target="_blank">
					<Instagram />
				</Link>
				<Link href="https://www.facebook.com/MortimerAmsterdam/" target="_blank">
					<Facebook />
				</Link>
			</Container>
		);
	}
}
