import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from './Hotel';
import Map from '../map/Map';

const HotelData = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='grid grid-cols-2 mt-10 mx-20 gap-x-10'>
            <div>
                <p className='text-white text-xl'>252 stays apr 13-17 3guests</p>
                <h1 className='text-white text-4xl font-bold'>stay in cox's Bazar</h1>
                <div>
                   {
                    data.map(d => <Hotel key={d.id} hotel={d} ></Hotel>)
                   }
                </div>
            </div>
            <div className='mt-14'>
               <Map></Map>
            </div>
        </div>
    );
};

export default HotelData;