import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hook/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector( state => state.ui );


  const [formValues ,handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2} = formValues;

  const handleRegister = (e) =>{
    e.preventDefault();
    
    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email,password,name))
    }

  }

  //manejo de errores en el form
  const isFormValid = () =>{
    if(name.trim().length === 0){
      dispatch(setError('Name is not valid'))
      return false;
    } else if( !validator.isEmail(email) ){
      dispatch(setError('Email is not valid'))
      return false;
    }else if( !password === password2 || password.length < 5 ){
      dispatch(setError('Password dont match'))
      return false;
    }
    dispatch(removeError())
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>

        { (msgError) &&
            <div className='auth__alert-error'>
            {msgError}
            </div>
        }

        <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off" value = {name} onChange={handleInputChange}/>
        <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value = {email} onChange={handleInputChange}/>
        <input className="auth__input" type="password" placeholder="Password" name="password" autoComplete="off" value = {password} onChange={handleInputChange}/>
        <input className="auth__input" type="password" placeholder="Confirm Password" name="password2" value = {password2} onChange={handleInputChange}/>
        <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>

        <Link className="link mt-5" to='/login/auth/login'>
          Already registerd?
        </Link>
      </form>
    </>
  )
};
