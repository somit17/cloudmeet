import React from 'react';
import { Sidebar } from 'primereact/sidebar';

const Participants = ({ visible, onHide }: { visible: boolean; onHide: () => void }) => {
  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={onHide}
      style={{ width: '250px' }} // Fixed width for the sidebar
    >
      <h2>Participants</h2>
      <ul>
        <li>Participant 1</li>
        <li>Participant 2</li>
        <li>Participant 3</li>
      </ul>
    </Sidebar>
  );
};

export default Participants;