import React from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useGlobalContext } from '../contextAPI/GlobalContext';

const Registration = () => {
  const { dialog } = useGlobalContext();
  const passwordHeader = <div className="font-bold mb-3">Pick a password</div>;
  const passwordFooter = (
    <>
      <Divider />
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
      onHide={() => {dialog.closeRegistration }}
    >
      <div className="flex flex-column align-items-center justify-content-center">
        <span className="text-center text-6xl">Sign Up</span>

        <div className="flex flex-column align-items-center mt-5 w-20rem">
          <span className="w-full">
            <FloatLabel>
              <InputText id="email" className="w-full custom-input" />
              <label htmlFor="email">Email</label>
            </FloatLabel>
          </span>
        </div>
        <div className="flex flex-column align-items-center mt-5 w-20rem">
          <span className="w-full">
            <FloatLabel>
              <Password
                inputId="password"
                header={passwordHeader}
                footer={passwordFooter}
                toggleMask
                />
              <label htmlFor="password">Password</label>
            </FloatLabel>
          </span>
        </div>



        <div className="flex flex-column align-items-center mt-4 w-15rem">
          <Button label="Sign Up" rounded className="mb-2 w-full"></Button>
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