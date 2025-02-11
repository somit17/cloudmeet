import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Icons from './Icons';
import Camera from './Camera';
import Participants from './Participants';

const VideoComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [showParticipants, setShowParticipants] = useState<boolean>(false);

  return (
    <div className="card flex justify-content-center">
      {/* Button to open the dialog */}
      <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />

      {/* Main Dialog */}
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        maximizable
        style={{ width: '100vw', height: '100vh' }} // Adjust size for better layout
        footer={<Icons />} // Icons at the bottom
      >
        {/* Participants Sidebar */}
        <Participants visible={showParticipants} onHide={() => setShowParticipants(false)} />

        {/* Camera Component (Centered) */}
        <div className="flex-grow-1 flex align-items-center justify-content-center">
          <Camera />
        </div>
      </Dialog>
    </div>
  );
};

export default VideoComponent;