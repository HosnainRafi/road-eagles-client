import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {

    const [service, setService] = useState({});
    const { serviceId } = useParams();
    const { user } = useAuth();
    const history = useHistory();


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.destination = service?.title;
        // data.status = status;
        fetch("http://localhost:5000/addEvent", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        history.push('/home')
        swal("Congratulation!", "You have added successfully", "success");
        reset();
    };

    return (
        <div>
            <div className="container my-4">
                <h2 className="my-4 text-center">Order {service?.name}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={service?.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">{service?.name}</h4>
                                <p class="card-text">{service?.description}</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 style={{ color: "brown" }}>Mileage: {service?.Mileage}kmpl</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 style={{ color: "brown" }}>Engine: {service?.Engine}cc</h5>
                                    </div>
                                </div>
                                <h3>Price: <span style={{ color: "goldenrod" }}>{service?.price}$</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">

                            <input className="mb-2" placeholder="Enter Your Address" {...register("address", { required: true })} />

                            <input className="mb-2" placeholder="Enter the UserName" disabled defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 100 })} />
                            <input className="mb-2" type="email" placeholder="Enter Your email" disabled defaultValue={user?.email} {...register("email", { required: true, maxLength: 100 })} />
                            <input className="mb-2" type="number" placeholder="Enter Your Phone No" {...register("phone", { required: true, maxLength: 100 })} />
                            <input className="mb-2" placeholder="Travel date" type="date"  {...register("travelDate", { required: true })} />

                            <input className="btn btn-warning text-white" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;