import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';
const CollapseWrapper = styled(animated.div)`
	background: rgb(18, 60, 56);

	top: 4.5rem;
	left: 0;
	right: 0;
`;
const NavLinks = styled.ul`
	list-style-type: none;
text-align:center;
	padding: 5rem 1rem 2rem 2rem;
	& li {
		transition: all 300ms linear 0s;
		j
	}
	& span {
		font-size: 1.4rem;
		line-height: 2;
		color: rgb(252, 253, 217);
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		&:hover {
			color: rgb(255, 69, 0);
			border-bottom: 1px solid rgb(255, 69, 0);
		}
	}
`;

const CollapseMenu = (props) => {
	const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

	if (props.navbarState === true) {
		return (
			<CollapseWrapper
				style={{
					transform: open
						.interpolate({
							range: [0, 0.2, 0.3, 1],
							output: [0, -20, 0, -200]
						})
						.interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
				}}
			>
				<NavLinks>
					<li>
						<Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
							<span>About</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="menu" spy={true} smooth={true} offset={0} duration={500}>
							<span>Menu</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={500}>
							<span>Work with us</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
							<span>Contact</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={500}>
							<span>Work with us</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="gallery" spy={true} smooth={true} offset={0} duration={500}>
							<span>Gallery</span>
						</Link>
					</li>
				</NavLinks>
			</CollapseWrapper>
		);
	}
	return null;
};
export default CollapseMenu;
