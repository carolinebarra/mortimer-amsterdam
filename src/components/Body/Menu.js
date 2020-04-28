import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import Header from './Header';
import styled from 'styled-components';
import Drinks from '../../images/mortimer-drinks.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import Food from '../../images/mortimer-menu.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const MyButton = styled.button({
	background: ' rgb(255, 69, 0)',
	border: 0,
	borderRadius: 30,

	color: 'white',
	height: 48,
	padding: '0 30px',
	margin: 8,
	fontSize: 24
});
const Box = styled.div`
	text-align: center;
	height: 100%;
	background-color: #0d2925;
	color: #8ca99f;

	hr {
		display: block;
		width: 100%;
		background-image: linear-gradient(to right, #ff4500, #333, #8ca99f);
		border: 0;
		height: 2px;
		position: absolute;
	}
`;
const PDFDocumentWrapper = styled.div`
	canvas {
		width: 100% !important;
		height: auto !important;
		display: inline;
	}
`;
class Pdf extends Component {
	state = {
		numPages: null,
		pageNumber: 1
	};

	render() {
		const { pageNumber } = this.state;
		return (
			<PDFDocumentWrapper>
				<Document file={Drinks}>
					<Page pageNumber={pageNumber}></Page>
				</Document>
			</PDFDocumentWrapper>
		);
	}
}
class Pdf2 extends Component {
	state = {
		numPages: null,
		pageNumber: 1
	};

	render() {
		const { pageNumber } = this.state;
		return (
			<PDFDocumentWrapper>
				<Document file={Food}>
					<Page pageNumber={pageNumber}></Page>
				</Document>
			</PDFDocumentWrapper>
		);
	}
}

export default function Menu() {
	const [showDrinks, setShowDrinks] = React.useState(false);
	const [showFood, setShowFood] = React.useState(false);
	const onClick = () => setShowDrinks(!showDrinks);
	const onClick2 = () => setShowFood(!showFood);
	return (
		<Col lg={12}>
			<Box id="menu">
				<Header title={'Menu'} />

				<MyButton onClick={onClick2}> Food</MyButton>

				<MyButton onClick={onClick}> Drinks</MyButton>

				{showDrinks ? <Pdf /> : ''}
				{showFood ? <Pdf2 /> : ''}
				<hr />
			</Box>
		</Col>
	);
}
