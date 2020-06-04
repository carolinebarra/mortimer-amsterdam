import React from 'react';
import { Col } from 'react-grid-system';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';
import { LazyImageProvider } from './LazyImage/LazyImageContext';
import LazyImage from './LazyImage/LazyImage';
import background from '../../images/background-gallery.jpg';
import Header from './Header';

const Box = styled.div`
	text-align: center;
	height: 100vh;
	background-image: url(${background});

	color: rgb(252, 253, 217);

	@media (max-width: 414px) {
		height: 70vh;
	}
	@media (max-width: 1024px) {
		height: 70vh;
	}
`;

const images = [
	'/img/cofee3.jpeg',
	'img/coffee2.jpeg',
	'img/eggs.jpeg',
	'img/eggs2.jpeg',
	'img/hollandaise.jpeg',
	'img/japanese.jpeg',
	'img/mushrooms.jpeg',
	'img/pancakes.jpeg',
	'img/parmesan.jpeg',
	'img/salmon.jpeg'
];

export default function Gallery() {
	return (
		<Col lg={12}>
			<Box id="gallery">
				<Header title={'Gallery'} />
				<LazyImageProvider>
					<Carousel>
						{images.map((image, i) => (
							<LazyImage aspectRatio={[16, 9]} src={image} key={i} />
						))}
					</Carousel>
				</LazyImageProvider>
			</Box>
		</Col>
	);
}
