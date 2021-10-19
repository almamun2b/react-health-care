import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange, error, handleResetPassword } = useAuth();
    return (
        <div className="login-form">
            <div className="col-6 mx-auto mb-5">
                <div className="mx-5">
                    <br />
                    <form onSubmit={handleLogin}>

                        <h3 className='text-primary'>Please Login</h3>

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

                        <p>New User? <Link to="/register">Create Account</Link></p>

                        <div className="row mb-3 text-danger">
                            {error}
                        </div>
                        <button type="submit" className="btn btn-primary me-3">Login</button>
                        <button onClick={handleResetPassword} type="button" className="btn btn-secondary">Reset Password</button>
                    </form>
                    <div>----------------------------------------</div>
                    <br />
                    <button className="btn btn-primary" onClick={signInUsingGoogle}>Google SignIn</button>
                </div>

            </div>
        </div>
    );
};

export default Login;