import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.message) validationErrors.message = "Message is required";
    setErrors(validationErrors);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
      {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;