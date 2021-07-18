import React, { useState } from 'react';
import './LoginForm.css';

import { CForm, CInput, CInputGroup, CButton } from '@coreui/react';

const LoginForm = ({ onSubmit, error }) => {
	const [ values, setValues ] = useState({
		email: '',
		password: ''
	});

	const _onSubmit = (event) => {
		event.preventDefault();
		onSubmit(values);
	};

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div className="login-form">
			<div className="login-form-col">
				<h1>Connexion Admin</h1>
				<p>Connectez vous avec votre compte</p>
				<CForm onSubmit={_onSubmit}>
					<CInputGroup className="mb-3">
						<CInput
							type="email"
							placeholder="email"
							autoComplete="off"
							onChange={handleChange}
							name="email"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="password"
							placeholder="password"
							onChange={handleChange}
							autoComplete="off"
							name="password"
						/>
					</CInputGroup>

					<CButton type="submit" color="success" className="px-4">
						Login
					</CButton>
				</CForm>
				<p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
			</div>

			<div className="login-form-img">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Logo-ESGI.jpg" />
			</div>
		</div>
	);
};

export default LoginForm;
