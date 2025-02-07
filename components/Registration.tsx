import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primeflex/primeflex.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="p-4">
      <h2>Register for CloudMeet</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field p-mb-4">
          <label htmlFor="name" className="p-mb-2">Name</label>
          <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="p-field p-mb-4">
          <label htmlFor="email" className="p-mb-2">Email</label>
          <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button type="submit" label="Register" />
      </form>
    </div>
  );
};

export default Registration;
