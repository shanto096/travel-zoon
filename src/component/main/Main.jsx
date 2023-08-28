import React from 'react';
import Navber from '../navber/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-[url(https://s27363.pcdn.co/wp-content/uploads/2020/05/Travel-Quotes.jpg.optimal.jpg)] h-[100vh] w-full bg-cover'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;