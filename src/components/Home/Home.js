import React from 'react';
import Banner from '../Banner/Banner';
import FeaturesDoctor from '../FeaturesDoctor/FeaturesDoctor';
import FeaturesServices from '../FeaturesServices/FeaturesServices';
import Overview from '../Overview/Overview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesServices></FeaturesServices>
            <Overview></Overview>
            <FeaturesDoctor></FeaturesDoctor>
        </div>
    );
};

export default Home;