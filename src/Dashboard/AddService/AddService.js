import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

const AddService = () => {

    const history = useHistory();

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://calm-dawn-94337.herokuapp.com/addServices', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if (result.insertedId) {
                swal("Congratulation!" ,"You have added the service", "success");
                reset();
                history.push('/home')
            }
        })
        
    };

    return (
        <div>
            <div className="container form text-center mx-auto my-4">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto">
                    <input className="mb-2" placeholder="Enter Name of the Bike" {...register("name", { required: true, maxLength: 20 })} />
                    <input className="mb-2" placeholder="Enter the Description" {...register("description", { required: true, maxLength: 100 })} />
                    <input className="mb-2" placeholder="Enter Course Image url" {...register("img", { required: true, maxLength: 100 })} />
                    <input className="mb-2" type="number" placeholder="Enter the Price" {...register("price", { required: true})} />
                    <input className="mb-2" type="number" placeholder="Enter the Mileage" {...register("Mileage", { required: true})} />
                    <input className="mb-2" type="number" placeholder="Enter the Engine" {...register("Engine", { required: true})} />
                    <input className="btn btn-warning text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;