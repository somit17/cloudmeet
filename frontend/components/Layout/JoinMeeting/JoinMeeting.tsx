import React from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useGlobalContext } from "../../../contextAPI/GlobalContext";
import { InputText } from "primereact/inputtext";

const JoinMeeting = () => {
  const { navMeeting } = useGlobalContext();

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={navMeeting.meeting}
        style={{ width: '30vw' }}
        onHide={navMeeting.closeMeeting}
      >
        <div className="flex flex-column align-items-center justify-content-center">
          <span className="text-center text-6xl">Join Meeting</span>
          <div className="flex flex-column align-items-center mt-5 w-full">
            <span className="w-full flex justify-content-center">
              <InputText
                type="text"
                placeholder="Enter Meeting ID"
                className="w-20rem"
              />
            </span>
          </div>

          <div className="flex flex-column align-items-center mt-3 w-full">
            <span className="w-full flex justify-content-center">
              <InputText
                type="text"
                placeholder="Enter Your Name"
                className="w-20rem"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-content-end mt-4 mr-5">
          <Button label="Cancel" severity="secondary" rounded className="mr-2" onClick={navMeeting.closeMeeting}/>
          <Button label="Join" rounded />
        </div>
      </Dialog>
    </div>
  );
};

export default JoinMeeting;