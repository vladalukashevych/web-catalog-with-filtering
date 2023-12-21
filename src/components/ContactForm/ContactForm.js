import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
        if (!data.name || !data.email) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        const response = await axios.post('http://localhost:5000/submitForm', data);
        console.log('Form Data Submitted:', data);
        console.log('Server Response:', response.data.message);

        setErrorMessage('Form data submitted successfully!');
        navigate('/');
    } catch (error) {
        console.error('Error submitting form data:', error.message);
        setErrorMessage('An error occurred. Please try again later.');
    } 
};

  return (
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <h2>Leave your contacts and we'll be sure to get back to you!</h2>
          <label>
              Your Name:
              <input type="text" {...register('name')} required/>
          </label>
          <br/>
          <label>
              Your Email:
              <input type="email" {...register('email')} required/>
          </label>
          <br/>
          <button type="submit" className='btn-main'>Submit</button>
          {errorMessage && <p>{errorMessage}</p>}
      </form>
  );
};

export default ContactForm;