import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './TodoPost.css';

function TodoPost() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    axios.post('https://admin.srkproject.com/web/api/client/v1/contact-us/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <p className="error">Name is required</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email?.type === 'required' && <p className="error">Email is required</p>}
        {errors.email?.type === 'pattern' && <p className="error">Invalid email format</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register('message', { required: true })}></textarea>
        {errors.message && <p className="error">Message is required</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoPost;