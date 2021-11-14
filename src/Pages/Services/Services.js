import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from './Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])

    

    return (
        <>
            <Header></Header>
            <div className="my-4">
                <h1 className="text-center">Explore Bikes</h1>
                <div className="row container-fluid container mx-auto">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Services;