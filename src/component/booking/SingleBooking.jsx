import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleBooking = () => {
    const bookingData = useLoaderData()

    const {photoUrl,destinationName,country,bestTimeToVisit,currency,id,localTimezone,description} = bookingData

    return (
        <div className='mx-60 bg-white rounded-lg p-10 mt-10'>
             <div className='grid grid-cols-2'>
             <div className='rounded-lg'>
            <img className=' h-80 p-5' src={photoUrl} alt="" />
            </div>
            <div className='mt-4 mr-5 space-y-3'>
              <h1>Name:  {destinationName}</h1>
              <h2>Country:  {country}</h2>
              <h3>Best Time Visit:  {bestTimeToVisit}</h3>
              <h4>Currency:  {currency}</h4>
              <h5>Local Time zone:  {localTimezone}</h5>
              <p>description: {description}</p>
           <Link to='/destination'><button className='bg-[#F9A51A] mr-5   px-10    py-2 items-center mt-10 rounded   text-black inline-flex '>Go Back </button></Link>

          <Link to='/booking'><button className='bg-[#F9A51A] px-10  py-2 items-center mt-4 rounded   text-black inline-flex '>Booking </button></Link>

            </div>
             </div>
            
        </div>
    );
};

export default SingleBooking;