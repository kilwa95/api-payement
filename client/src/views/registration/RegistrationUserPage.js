import React, { useState} from 'react';
import RegistrationUserForm from '../../UI/form/registration/RegistrationUserForm';
import usersHttp from '../../services/usersHttp';
import {Redirect} from 'react-router-dom'



const RegistrationUserPage = () => {
    const [user, setUser] = useState('')

    const onSubmit = async (values) => {
       const data = await  usersHttp.registrationUser(values)
       if(data){
        setUser(data)
       }
    }

    if(user){
        return <Redirect to="/login" />
    }

    return(
        <RegistrationUserForm onSubmit={onSubmit} />
    )
    
}

export default RegistrationUserPage




