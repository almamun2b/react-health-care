import { useEffect, useState } from 'react';

const useDepartments = () => {
    const [department, setDepartment] = useState([]);

    useEffect(() => {
        fetch('department.json')
            .then(res => res.json())
            .then(data => setDepartment(data))
    }, []);

    return [department];
};

export default useDepartments;