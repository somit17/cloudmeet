import React from 'react'
import {Menubar} from "primereact/menubar";
import {Button} from "primereact/button";

const Icons=()=> {
  const menuIcons =[
    {icon:<Button icon="pi pi-microphone" size='large' rounded outlined raised aria-label="Mic"/>},
    {icon:<Button icon="pi pi-video" rounded outlined raised aria-label="Video"/>},
  ]
  return (
    <Menubar model={menuIcons} />
  )
}

export default Icons