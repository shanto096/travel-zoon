import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleHotel = () => {
    const data =useLoaderData()
    const {photoUrl,hotelName,country,city,localTimezone,currency,description,rating,pricePerNight} = data

    return (
        <div className='mx-60 bg-white rounded-lg mt-10 p-10'>
             <div className='grid grid-cols-2'>
             <div className='rounded-lg'>
            <img className=' h-80 p-5' src={photoUrl} alt="" />
            </div>
            <div className='mt-4 mr-4 space-y-2'>
              <h1>Name:  {hotelName}</h1>
              <h2>Country:  {country}</h2>
              <h3>City:  {city}</h3>
              <h4>Currency:  {currency}</h4>
              <h5>Local Time zone:  {localTimezone}</h5>
              <p>PricePer Night: {pricePerNight}</p>
              <p>Rating: {rating}</p>
              <p>description: {description}</p>
              <Link to='/hotel'><button className='bg-[#F9A51A]  px-10    py-2 items-center mt-10 rounded   text-black inline-flex '>Go Back </button></Link>
              
            </div>
             </div>
            
        </div>
    );
};

export default SingleHotel;