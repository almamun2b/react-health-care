import React from 'react';
import { Link } from 'react-router-dom';
import useDepartments from '../../hooks/useDepartments';
import Department from '../Department/Department';

const FeaturesDepartment = () => {
    const [department] = useDepartments();
    const slicedDepartment = department.slice(0, 3);
    return (
        <div>
            <h4 className='my-4'>
                Our Departments: <Link to='/department'>
                    <button className='btn btn-primary'>Our Departments</button>
                </Link>
            </h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 p-3 container mx-auto'>
                {
                    slicedDepartment.map(department => <Department
                        key={department.id}
                        department={department}
                    ></Department>)
                }
            </div>
        </div>
    );
};

export default FeaturesDepartment;