import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const FeaturesDoctor = () => {
    const [doctors] = useDoctors();
    const slicedDoctors = doctors.slice(0, 3);
    return (
        <div>
            <h4 className='my-4'>
                Our Doctors: <Link to='/doctors'>
                    <button className='btn btn-primary'>Our Doctors</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    slicedDoctors.map(service => <Doctor
                        key={service.id}
                        service={service}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default FeaturesDoctor;