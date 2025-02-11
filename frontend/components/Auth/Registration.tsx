import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { useGlobalContext } from '../../contextAPI/GlobalContext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { registerUser } from '../../services/authService';
import {useToast} from "../../hooks/useToast";
import {Toaster} from "../../utils/Toaster";
const Registration = () => {
  const { dialog } = useGlobalContext();
  const { showSuccess, showError } = useToast();
  // Form State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Error State
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Clear specific error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    try {
      const response = await registerUser(formData);
      showSuccess(response.detail);
    } catch (error) {
      console.error('Registration failed:', error);
      showError(error.message);
    }
  };


  const passwordHeader = <div className="font-bold mb-3">Pick a password</div>;

  const passwordFooter = (
    <>
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );

  return (

    <Dialog
      visible={dialog.isRegistrationOpen}
      style={{ width: '50vw' }}
      onHide={() => {
        dialog.closeRegistration();
      }}
    >
      <div className="flex flex-column align-items-center justify-content-center">
        <Toaster />
        <span className="text-center text-6xl">Sign Up</span>

        <div className="flex flex-column align-items-center mt-5 w-20rem">
          <span className="w-full">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-envelope" />
              <InputText
                id="email"
                className={`w-full custom-input ${errors.email && 'p-invalid'}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </IconField>
            {errors.email && (
              <Message
                className="w-full mt-2"
                severity="error"
                text={errors.email}
              />
            )}
          </span>
        </div>

        <div className="flex flex-column align-items-center mt-5 w-20rem">
          <span className="w-full">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-lock" />
              <Password
                inputId="password"
                header={passwordHeader}
                footer={passwordFooter}
                toggleMask
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full ${errors.password && 'p-invalid'}`}
              />
            </IconField>
            {errors.password && (
              <Message
                className="w-full mt-2"
                severity="error"
                text={errors.password}
              />
            )}
          </span>
        </div>

        <div className="flex flex-column align-items-center mt-4 w-15rem">
          <Button
            label="Sign Up"
            rounded
            className="mb-2 w-full"
            onClick={handleSubmit}
            disabled={!!errors.email || !!errors.password}
          />
        </div>

        <div className="flex gap-3 mt-4">
          <i
            className="pi pi-github text-black hover:text-gray-700 cursor-pointer transition-colors"
            style={{ fontSize: '2rem' }}
          ></i>
        </div>
      </div>
    </Dialog>
  );
};

export default Registration;