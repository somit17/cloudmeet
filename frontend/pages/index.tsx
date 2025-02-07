import React from 'react';
import HomePage from '../components/HomePage';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Registration from '../components/Registration';
import { GlobalProvider } from '../contextAPI/GlobalContext';
import Layout from '../components/Layout/Layout';
const Home = () => {
  return (
    <>
      <GlobalProvider>

        {/* <HomePage />
        <Registration /> */}

        <Layout />
      </GlobalProvider>
    </>
  );
};

export default Home;
