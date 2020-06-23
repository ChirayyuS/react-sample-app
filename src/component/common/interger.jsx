import React from 'react';
import { useForm } from 'react-hook-form';

export const Interger = () => {
    const { register, handleSubmit, errors } = useForm();
    return(
        <>
        Interger: 
    <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({ required: true, minLength: 6, maxLength: 12 })} />
    </>
)
    }