import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import play from '../../images/play-store.png';
import app from '../../images/app-store.png';

const Footer = () => {
    return (
        <div className='bg-dark text-white footer '>
            <div className='container row my-4 mx-auto'>
                <div className='col'>
                    <div className='text-start my-2'>
                        <Link to='/home'>
                            <button className='btn btn-primary '>Home</button>
                        </Link>
                        <Link to='/services'>
                            <button className='btn btn-primary mx-3'>Services</button>
                        </Link>
                        <Link to='/'>
                            <button className='btn btn-primary'>Lisence</button>
                        </Link>
                    </div>
                    <div className='text-start my-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Features</button>
                        </Link>
                        <Link to='/'>
                            <button className='btn btn-primary mx-3'>Pricing</button>
                        </Link>
                        <Link to='/'>
                            <button className='btn btn-primary'>Help</button>
                        </Link>
                    </div>
                    <div className='text-start ms-2'>
                        <h6 className='my-3'>Email: almamun2b@gmail.com</h6>
                        <h6 className='my-3'>Phone: +8801700000000</h6>
                    </div>
                </div>
                <div className='col'>
                    <h3>Get Our App</h3>
                    <div>
                        <Link to='/'>
                            <img className='me-3' src={play} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={app} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <h6 className='my-3'>MyCodingLab Inisiative, Copyright @2021</h6>
        </div>

    );
};

export default Footer;