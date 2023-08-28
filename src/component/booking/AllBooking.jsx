import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SeeAllBooking from './SeeAllBooking';

const AllBooking = () => {
    const booking = useLoaderData()
    return (
        <div className='mt-32'>
            <div className='grid grid-cols-4 mx-20 gap-x-4 gap-y-10'>
                {
                    booking.map(d =><SeeAllBooking key={d.id} bookingData ={d}></SeeAllBooking>)
                }
            </div>
        </div>
    );
};

export default AllBooking;