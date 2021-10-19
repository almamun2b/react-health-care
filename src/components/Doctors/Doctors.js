import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    doctors.map(service => <Doctor
                        key={service.id}
                        service={service}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;