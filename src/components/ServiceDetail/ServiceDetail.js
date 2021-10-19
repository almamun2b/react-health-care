import React from 'react';
import { useParams } from 'react-router-dom';
// import useServices from '../../hooks/useServices';

const ServiceDetail = () => {
    let { id } = useParams();
    // const [services] = useServices();
    // const found = services.find(element => element.id === id);
    // console.log(found);

    return (
        <div>
            <h2>This is Service {id}</h2>
        </div>
    );
};

export default ServiceDetail;