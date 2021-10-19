import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const FeaturesServices = () => {
    const [services] = useServices();
    const slicedServices = services.slice(0, 6);
    return (
        <div>
            <h4 className='my-4'>
                Our Services: <Link to='/services'>
                    <button className='btn btn-primary'>Our Services</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    slicedServices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default FeaturesServices;