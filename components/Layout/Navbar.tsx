import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar'
import React from 'react'
import { useGlobalContext } from '../../contextAPI/GlobalContext';
import JoinMeeting from './JoinMeeting/JoinMeeting';
const items = [
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
];
const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;


const Navbar = () => {
  const { navMeeting } = useGlobalContext();
  const end = (
    <div className="flex align-items-center gap-2" >
      <Button label='New Meeting' rounded className="p-button-sm" style={{ whiteSpace: 'nowrap', flex: 1 }}></Button>
      <Button label='Join' outlined rounded style={{ color: 'black' }} className="p-button-sm" onClick={navMeeting.joinMeeting}></Button>
      <Avatar image="/images/avatar/asiyajavayant.png" size="large" shape="circle" />
    </div>
  );
  return (
    <>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div> <JoinMeeting />  </>
  )
}

export default Navbar