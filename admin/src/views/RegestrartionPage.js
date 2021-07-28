import React, { useState} from 'react';
import RegistrationMerchantForm from '../UI/form/registration/RegistrationMerchantForm';
import usersHttp from '../services/usersHttp'
import {Redirect} from 'react-router-dom'


const RegistrationPage = () => {
    const [user, setUser] = useState('')

    const onSubmit = async(values) => {
     const data = await usersHttp.registration(values);
     if(data){
        setUser(data)
       }
    }

    if(user){
        return <Redirect to="/login" />
    }
    return(
        <RegistrationMerchantForm onSubmit={onSubmit}   />
    )
}

export default RegistrationPage
