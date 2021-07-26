import React, { useState } from 'react';
import { CForm, CInput, CInputGroup, CButton } from '@coreui/react';

const CredentialForm = ({ onSubmit, error }) => {

    const [ values, setValues ] = useState({
		client_token: '',
		client_secret:''
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

    return(
        <CForm onSubmit={_onSubmit}>
            <CInputGroup className="mb-3">
                <CInput
                    placeholder="clientToken"
                    type="text"
                    autoComplete="off"
                    onChange={handleChange}
                    name="client_token"
                />
            </CInputGroup>

            <CInputGroup className="mb-3">
                <CInput
                    type="text"
                    placeholder="clientSecret"
                    onChange={handleChange}
                    autoComplete="off"
                    name="client_secret"
                />
            </CInputGroup>

            <CButton type="submit" color="success" className="px-4">
                valider
            </CButton>
    	</CForm>
    )

}

export default CredentialForm;


