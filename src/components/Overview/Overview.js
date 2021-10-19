import React from 'react';
import "./Overview.css"

const Overview = () => {
    return (
        <div>
            <div className="container bg-primary text-light my-4 py-4 rounded-3">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <h1>35</h1>
                        <h3>Departments</h3>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h1>100</h1>
                        <h3>Expert Doctors</h3>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h1>300</h1>
                        <h3>Trained Nurse</h3>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h1>1000000</h1>
                        <h3>Happy Patient</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;