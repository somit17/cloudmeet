import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { useGlobalContext } from '../../contextAPI/GlobalContext';
import { InputText } from 'primereact/inputtext';
import {loginUser} from '../../services/authService';
import {useToast} from "../../hooks/useToast";
const Login = () => {
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


  const handleLogin = async () => {
    try {
      const response = await loginUser(formData);
      showSuccess(response.detail);
    } catch (error) {
      console.error('Registration failed:', error);
      showError(error.message);
    }
  };




  return (

    <Dialog
      visible={true}
      style={{ width: '50vw' }}
      onHide={() => {
        dialog.closeRegistration();
      }}
    >
      <div className="flex flex-column align-items-center justify-content-center">
        <span className="text-center text-6xl">Login</span>
        <div className="flex flex-column align-items-center mt-5 w-20rem">
          <span className="w-full">
              <InputText
                id="username"
                className={`w-full custom-input ${errors.email && 'p-invalid'}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
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
              <Password
                inputId="password"
                toggleMask
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full ${errors.password && 'p-invalid'}`}
              />
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
            label="Login"
            rounded
            className="mb-2 w-full"
            onClick={handleLogin}
            disabled={!!errors.username || !!errors.password}
          />
        </div>

      </div>
    </Dialog>
  );
};

export default Login;