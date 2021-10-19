import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <div className='banner d-flex align-items-center p-4'>
                <div className='container'>
                    <div className='mb-5 banner-info  text-light'>
                        <h1 className='mb-5 '>Best Medical & Healthcare Service For Your Family</h1>
                        <p>The hospital is providing cardiology services by 2 modern cath-lab and round the clock CCU facility including cardiac surgery (Adult & Pediatric) by 2 cardiac OT by renowned cardiologists and cardiac surgeons. This hospital has its own stoke units with DSA and stanting with coiling facility. Vascular surgery with PAG, Stenting and Laser services is another service of this hospital.</p>
                    </div>

                    <div>
                        <Link to='/services'>
                            <button className='btn btn-primary me-2'>Our Services</button>
                        </Link>
                        <Link to='/doctors'>
                            <button className='btn btn-primary'>Our Qulified Doctors</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;