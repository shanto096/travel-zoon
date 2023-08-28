import React from 'react';
import { Link } from 'react-router-dom';

const SeeAllBooking = ({bookingData}) => {
    console.log(bookingData);
    const {photoUrl,destinationName,country,bestTimeToVisit,currency,id} = bookingData
    return (
        <div className=' bg-white rounded-xl '>
            <div>
            <img className='rounded-lg h-72 p-4' src={photoUrl} alt="" />
            <div className='ml-5 space-y-3'>
              <h1>Name: {destinationName}</h1>
              <h2>Country: {country}</h2>
              <h3>Best Time Visit: {bestTimeToVisit}</h3>
              <h4>Currency: {currency}</h4>
            </div>
            </div>
            <Link to={`/singlebooking/${id}`}><button className="text-black rounded-md py-1 px-4 my-3 bg-[#F9A51A]  transition duration-300 mx-28">Details</button></Link>
        </div>
    );
};

export default SeeAllBooking;