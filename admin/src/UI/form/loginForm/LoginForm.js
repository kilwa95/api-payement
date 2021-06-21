import React from 'react';
import './LoginForm.css';

import { CForm, CInput, CInputGroup, CButton } from '@coreui/react';

const LoginForm = (props) => {
	return (
		<div className="login-form">
			<div className="login-form-col">
				<h1>Connexion Admin</h1>
				<p>Connectez vous avec votre compte</p>
				<CForm>
					<CInputGroup className="mb-3">
						<CInput type="email" placeholder="email" autoComplete="email" />
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput type="password" placeholder="password" autoComplete="password" />
					</CInputGroup>

					<CButton type="submit" color="success" className="px-4">
						Login
					</CButton>
				</CForm>
			</div>

			<div className="login-form-img">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Logo-ESGI.jpg" />
			</div>
		</div>
	);
};

export default LoginForm;
