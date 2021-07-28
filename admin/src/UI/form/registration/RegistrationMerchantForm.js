import React, { useState } from 'react';

import { CForm, CInput, CInputGroup, CButton } from '@coreui/react';
import { useHistory  } from "react-router-dom";


const RegistrationMerchantForm = ({ onSubmit, error }) => {
	const history = useHistory()
	const [ values, setValues ] = useState({
        email: '',
        password: '',
        companyName: '',
        kbis: '',
        tel: '',
        site: '',
		quote: '',
		urlConfirmation:'',
		urlAnnulation: ''
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
				<h1>inscription nouveux merchant</h1>
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
					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="companyName"
							autoComplete="off"
							onChange={handleChange}
							name="companyName"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="kbis"
							onChange={handleChange}
							autoComplete="off"
							name="kbis"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="tel"
							onChange={handleChange}
							autoComplete="off"
							name="tel"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="site"
							onChange={handleChange}
							autoComplete="off"
							name="site"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="quote"
							onChange={handleChange}
							autoComplete="off"
							name="quote"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="urlConfirmation"
							onChange={handleChange}
							autoComplete="off"
							name="urlConfirmation"
						/>
					</CInputGroup>

					<CInputGroup className="mb-3">
						<CInput
							type="text"
							placeholder="urlAnnulation"
							onChange={handleChange}
							autoComplete="off"
							name="urlAnnulation"
						/>
					</CInputGroup>

					<CButton type="submit" color="success" className="px-4">
                    registration
					</CButton>
				</CForm>
				<p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
			</div>

			<div className="login-form-img">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Logo-ESGI.jpg" />
				<div> 
					<div>Déja un compte</div>
					<a href="#" onClick={() => history.push('/login')}>se logger</a>
				</div>
			</div>
		</div>
	);
};

export default RegistrationMerchantForm;
