import React, { useEffect } from 'react';
import { withLazyImageContext } from './LazyImageContext';
import './lazyimage.css';

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
	useEffect(() => {
		if (lazyLoad) lazyLoad.update();
	}, [src, aspectRatio, lazyLoad]);

	return (
		<div className="lazyImage">
			<img className="lazyImage__img" src={src} />
		</div>
	);
};

export default withLazyImageContext(LazyImage);
