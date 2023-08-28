import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = ({hotel}) => {
    const {photoUrl,hotelName,country,city,localTimezone,currency,id} = hotel

    return (
        <div className=' bg-white rounded-lg mt-8'>
             <div className='grid grid-cols-2'>
             <div className='rounded-lg'>
            <img className=' h-80 p-5' src={photoUrl} alt="" />
            </div>
            <div className='mt-10 space-y-3 '>
              <h1>Hotel Name:  {hotelName}</h1>
              <h2>Country:  {country}</h2>
              <h3>City:  {city}</h3>
              <h4>Currency:  {currency}</h4>
              <h5>Local Time zone:  {localTimezone}</h5>
          <Link to={`/hotel/${id}`}><button className='bg-[#F9A51A] px-10  py-2 items-center mt-4 rounded   text-black inline-flex '>See Details </button></Link>

            </div>
             </div>
            
        </div>
    );
};

export default Hotel;