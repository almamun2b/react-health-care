import React from 'react';
import img from '../../images/about.jpg'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-4">
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="text-success">About</h1>
                        <h4 className="text-primary">We Provide Essential Services For Your Health Care</h4>
                        <p>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital.</p>
                        
                        <h3 className="text-primary">OUR MISSION</h3>
                        <p>We are dedicated to meeting the needs of: <br/>Our patient : excellent and cost-effective healthcare
                            Our staff : continuing development and welfare
                            Our nation : partnership in promoting health in Bangladesh.</p>
                            
                        <h3 className="text-primary">OUR VISION</h3>
                        <p>To be a renowned organization at the leading edge of Medicine, providing quality healthcare to meet our nation's aspirations.
                        </p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;