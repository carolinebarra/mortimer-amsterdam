import React from 'react';
import styled from 'styled-components';
import logo from '../../images/mortimer-svg.svg';

const Image = styled.img`
	height: 100%;
	margin-left: -26rem;
	@media (max-width: 768px) {
		margin: auto 0;
	}
`;

const Brand = () => {
	return <Image src={logo} alt="Company Logo" />;
};

export default Brand;
