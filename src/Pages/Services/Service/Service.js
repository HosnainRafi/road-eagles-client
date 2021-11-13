import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, description, Mileage, Engine, img, price } = service;

    return (
        
        <div className="col-md-4 g-4">
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">{description.slice(0,180)}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 style={{ color: "brown" }}>Mileage: {Mileage}kmpl</h5>
                        </div>
                        <div className="col-md-6">
                            <h5 style={{ color: "brown" }}>Engine: {Engine}cc</h5>
                        </div>
                    </div>
                    <h3>Price: <span style={{ color: "goldenrod" }}>{price}$</span></h3>
                    <Link to={`/booking/${_id}`} >
                        <button className="btn btn-danger">Explore Now</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;