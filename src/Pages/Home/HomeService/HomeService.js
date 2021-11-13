import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service/Service';

const HomeService = () => {

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
        <div className="my-4">
            <h1 className="text-center">Explore Bikes</h1>
            <div className="row container-fluid container mx-auto">
            {
                services.slice(0,6).map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default HomeService;