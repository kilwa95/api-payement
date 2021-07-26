import React , {useContext, useState} from 'react';
import { CredentialContext } from "../../contexts/CredentialContext";
import MenuMerchant from '../../UI/menu/MenuMerchant';
import { Redirect } from "react-router-dom";
import {CCard , CCardBody, CCardHeader, CCol, CContainer, CRow} from '@coreui/react'
import CredentialForm from '../../UI/form/credentialForm/CredentialForm';


const CredentialsPage = (props) => {
    const { token , saveCredentials ,credentials } = useContext(CredentialContext);
    const [ modal, setModal ] = useState(false);

    return (
		<React.Fragment>
		{ token ? 
		<>
			<MenuMerchant setModal={setModal} />

            <CContainer style={{marginTop: '200px'}}>
            <CCard >
                <CCardHeader>Mes Credentials </CCardHeader>
                <CCardBody>
                <CRow>
                    <CCol>
                        <div>client-token: {credentials.client_token} </div>
                        <div>client-secret: {credentials.client_secret} </div>
                    </CCol>
                    <CCol>
                        <div>Enregestrer un nouveux Credential</div>
                        <CredentialForm onSubmit={(values) => saveCredentials(values)} />
                    </CCol>
                </CRow>
                </CCardBody>
            </CCard>
            </CContainer>
            
		</>
		: <Redirect to="/" />  }
		</React.Fragment>

	);
}

export default CredentialsPage
