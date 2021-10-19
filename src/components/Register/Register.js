import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleEmailChange, handleRegistration, handleNameChange, handlePasswordChange, error, handleResetPassword} = useAuth();
    return (
        <div className="login-form">
            <div className="col-6 mx-auto mb-5">
                <div className="mx-5">
                    <br />
                    <form onSubmit={handleRegistration}>

                        <h3 className='text-primary'>Please Register</h3>

                        <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your Name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Your Password" required />
                            </div>
                        </div>

                        <p>Already register? <Link to="/login">Login</Link></p>
                        
                        <div className="row mb-3 text-danger">
                            {error}
                        </div>
                        <button type="submit" className="btn btn-primary me-3">Register</button>
                        <button onClick={handleResetPassword} type="button" className="btn btn-secondary">Reset Password</button>

                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default Register;