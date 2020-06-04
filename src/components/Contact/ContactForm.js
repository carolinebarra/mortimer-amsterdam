import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: #8ca99f;

	margin-left: 10px;
	h1 {
		align-self: center;
		letter-spacing: 1px;
	}
	textarea {
		width: 100%;
		height: 186px;
	}

	.form-control {
		background: #0d2925;
		color: #8ca99f;
		outline: none;
		border: 0;
		font-size: 1.5em;
		border-bottom: 2px solid #8ca99f;
		input {
			color: #8ca99f;
		}
	}
`;
const MyButton = styled.button({
	background: ' rgb(255, 69, 0)',
	border: 0,
	borderRadius: 30,

	color: 'white',
	height: 48,
	padding: '0 30px',
	fontSize: 24
});

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [company, setCompany] = useState('');
	const [message, setMessage] = useState('');
	const [isSent, setIsSent] = useState(false);
	const submit = (e) => {
		e.preventDefault();
		fetch(`https://hooks.zapier.com/hooks/catch/7366248/o5nqq9g/`, {
			method: 'POST',
			body: JSON.stringify({ company, name, email, message })
		}).then(() => setIsSent(true));
	};

	return (
		<Container>
			<h1>Get in Touch</h1>
			<form onSubmit={submit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Full Name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						placeholder="Email address"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Company"
						id="company"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<textarea
						className="form-control"
						rows="6"
						placeholder="Message"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<MyButton type="submit">Send Mail</MyButton>
			</form>
			<div> {isSent && <div>Thank you for contacting us.</div>}</div>
		</Container>
	);
}

export default ContactForm;
