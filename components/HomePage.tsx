import React from 'react';
import { Button } from 'primereact/button'; // Assuming you're using PrimeReact for the Button component
import { useGlobalContext } from '../contextAPI/GlobalContext';

const HomePage = () => {
    const { dialog } = useGlobalContext();
    return (
        <div className="flex flex-column align-items-center justify-content-center h-screen">
            <span className="text-center text-6xl">Welcome to CloudMeet</span>
            <span className="text-center text-lg">Your seamless video conferencing solution</span>

            <div className="flex flex-column align-items-center mt-4 w-15rem">
                <Button label="Login" rounded className="mb-2 w-full" ></Button>
                <Button label="Sign Up" outlined rounded className="w-full"style={{color:'black'}} 
                onClick={dialog.openRegistration}
                ></Button>
            </div>
        </div>
    );
};

export default HomePage;