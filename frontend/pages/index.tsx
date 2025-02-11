import React from 'react';
import HomePage from '../components/HomePage';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'font-awesome/css/font-awesome.min.css';
import Registration from '../components/Auth/Registration';
import Layout from '../components/Layout/Layout';
import Login from "../components/Auth/Login";
import { GlobalProvider } from '../contextAPI/GlobalContext';
const Home = () => {
  return (
    <>
      <GlobalProvider>

         <HomePage />
        <Registration />
        <Login />
        {/*<Layout />*/}
      </GlobalProvider>
    </>
  );
};

export default Home;
