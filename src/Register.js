import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = input => {
        alert("Data ready for use " + input.name);
    };

    return (
        <div className="App">
           
            <h2 className="text-center mb-4">User Personal Information</h2>
            <form >
                <label className="Test">Name</label><br></br>
                <input className="Test" type="text"  {...register("name", { required: true, maxLength: 50 })} /><br></br>
                {errors.name && <div className="redError">"Please insert name"</div>}
                <label className="Test" > Email</label><br></br>
                <input className="Test" type="email"  {...register("mail", { required: true, maxLength: 50 })} /><br></br>
                {errors.mail && <div className="redError">"Please provide valid email"</div>}
                <label className="Test" >Phone Number</label><br></br>
                <input className="Test" type="tel"  {...register("phone", { required: true, maxLength: 10 })} /><br></br>
                {errors.phone && <div className="redError">"Please provide valid phone number"</div>}
                <label className="Test">Designation</label><br></br>
                <input className="Test" type="text"  {...register("designation", {maxLength: 50 })} /><br></br>
                <label className="Test">Location</label><br></br>
                <input className="Test" type="text"  {...register("location", { maxLength: 50 })} /><br></br>
                <br></br>
                <button className="Test" onClick={handleSubmit(onSubmit)}>
                    Send
                </button>

                <br></br>
               
            </form>
        </div>
    );

}
