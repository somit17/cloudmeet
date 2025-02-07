import React from 'react';
import HomePage from '../components/HomePage';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 

const Home = () => {
  return (
    <>
      <h1>CloudMeet - Video Conferencing</h1>
      <HomePage />
    </>
  );
};

export default Home;
