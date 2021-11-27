import React from 'react';
import useServices from '../../hooks/useServices';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [services] = useServices();
    const { id } = useParams();
    // const found = services.find(element => element.id === id);

    return (
        <div>
            <h2>This is Service {id}</h2>
            <h2>This is Service {services.length}</h2>
        </div>
    );
};

export default ServiceDetail;