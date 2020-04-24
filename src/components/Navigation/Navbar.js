import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-scroll';

const NavBar = styled(animated.nav)`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	background: rgb(18, 60, 56);
	z-index: 1;
	font-size: 1.4rem;
`;

const FlexContainer = styled.div`
	max-width: 120rem;
	display: flex;
	margin: auto;
	padding: 0 2rem;
	justify-content: space-between;
	height: 5rem;
`;
const NavLinks = styled(animated.ul)`
	justify-self: end;
	list-style-type: none;
	margin: auto 0;
	& span {
		color: rgb(252, 253, 217);
		text-transform: uppercase;
		font-weight: 600;
		border-bottom: 1px solid transparent;
		margin: 0 1.5rem;
		transition: all 300ms linear 0s;
		text-decoration: none;
		cursor: pointer;
		&:hover {
			color: rgb(255, 69, 0);
			border-bottom: 1px solid rgb(255, 69, 0);
		}
		@media (max-width: 768px) {
			display: none;
		}
	}
`;
const MobileWrapper = styled.div`
	margin: auto 0;
	@media (min-width: 769px) {
		display: none;
	}
`;

const Navbar = (props) => {
	const barAnimation = useSpring({
		from: { transform: 'translate3d(0, -10rem, 0)' },
		transform: 'translate3d(0, 0, 0)'
	});

	const linkAnimation = useSpring({
		from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 800,
		config: config.wobbly
	});
	return (
		<>
			<NavBar style={barAnimation}>
				<FlexContainer>
					<Brand />
					<NavLinks style={linkAnimation}>
						<Link activeClass="active" to="menu" spy={true} smooth={true} offset={0} duration={500}>
							<span>Menu</span>
						</Link>

						<Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
							<span>About</span>
						</Link>

						<Link activeClass="active" to="gallery" spy={true} smooth={true} offset={0} duration={500}>
							<span>Gallery</span>
						</Link>

						<Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
							<span>Contact</span>
						</Link>

						<Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={500}>
							<span>Work with us</span>
						</Link>
					</NavLinks>
					<MobileWrapper>
						<BurgerMenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
					</MobileWrapper>
				</FlexContainer>
			</NavBar>
			<CollapseMenu navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
		</>
	);
};
export default Navbar;
