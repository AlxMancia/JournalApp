import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hook/useForm";

export const LoginScreen = () => {
  const {loading} = useSelector( state => state.ui );

  const dispatch = useDispatch();

  const [formValues ,handleInputChange] = useForm({
    email: 'annie@gmail.com',
    password: '123456'
  });

  const {email,password} = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch( startLoginEmailPassword(email,password) );
  }

  const handleGoogleLogin = (e) =>{
    e.preventDefault();
    dispatch(startGoogleLogin());
  }


  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin} >
        <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value = {email} onChange={handleInputChange}/>
        <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
        <button className="btn btn-primary btn-block" type="submit" disabled={loading}>Log in</button>


        <div className="auth__social-networks">
          <p>Logging with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to='login/auth/register'>
          Create new account
        </Link>
      </form>
    </>
  );
};
