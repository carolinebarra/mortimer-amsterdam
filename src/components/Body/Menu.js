import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import styled from 'styled-components';
import Drinks from '../../images/mortimer-drinks.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import Food from '../../images/mortimer-food.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const MyButton = styled.button({
	background: ' rgb(255, 69, 0)',
	border: 0,
	borderRadius: 30,
	boxShadow: '0 3px 5px 2px  rgba(255, 158, 90) ',
	color: 'white',
	height: 48,
	padding: '0 30px',
	margin: 8,
	fontSize: 24
});
const Box = styled.div`
	text-align: center;
	height: 100%;

	.title {
		color: rgb(18, 60, 56);
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
				<h1 className="title">MENU</h1>

				<MyButton onClick={onClick2}> Food</MyButton>

				<MyButton onClick={onClick}> Drinks</MyButton>

				{showDrinks ? <Pdf /> : ''}
				{showFood ? <Pdf2 /> : ''}
			</Box>
		</Col>
	);
}
