import React from 'react';
import { useForm } from 'react-hook-form';

export default function Blog() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = input => {
        alert("Data ready for use " + input.name);
    };

    return (
        <div className="App">
            <br></br>
            <h2 className="text-center mb-4">Request to add article</h2>
            <form >
                <label className="Test">Title</label><br></br>
                <input className="Test" type="text"  {...register("title", { required: true, maxLength: 50 })} /><br></br>
                {errors.title && <div className="redError">"Please insert name"</div>}
                <label className="Test" > Name</label><br></br>
                <input className="Test" type="text"  {...register("name", { required: true, maxLength: 50 })} /><br></br>
                {errors.name && <div className="redError">"Please provide valid email"</div>}
                <label className="Test" >Article Content</label><br></br>
                <textarea className="Test" {...register("text", { required: true, maxLength: 100 })} /><br></br>
                {errors.text && <div className="redError">"Please write some text"</div>}
                <br></br>
                <label className="Test">Category</label><br></br>
                <select className="Test" {...register("category", { required: true })}>
                    <option value="music">Music</option>
                    <option value="travel">Travel</option>
                    <option value="lifestyle">Lifestyle</option>
                </select>
                <br></br><br></br>

                <button className="Test" onClick={handleSubmit(onSubmit)}>
                    Send
                </button>

                <br></br>
                <br></br>
            </form>
        </div>
    );

}
