import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    
        const [name, setName] = useState( '');
        const [Destination, setDestination] = useState( '');
      
       
      
        const handleSubmit = event => {
          event.preventDefault();
         
        };




    return (
        <div className='grid grid-cols-2 text-white items-center mt-20 ml-20'>
        <div className=" ">
          <h1 className="text-white text-7xl font-bold mb-5">
          Cox's bazar
            </h1>
          <p className="text-white text-lg space-y-4">
          Cox's Bazar is a city, fishing port, <br /> tourism centre and district headquarters in <br /> southeastern Bangladesh. It is famous mostly for its <br /> long natural sandy beach, and it ...
          </p>
        </div>
        <div >
        <div className="max-w-md mx-auto p-4">
      <form className='text-black bg-white px-10 rounded-xl mt-10 py-8' onSubmit={handleSubmit}>
        <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required/>
        </div>
        <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              value={Destination}
              onChange={(e) => setDestination(e.target.value)}
            required/>
        </div>
        <div className='grid grid-cols-2 gap-2 mb-3'>
            <div>
                <label htmlFor="text">Form</label>
            <div className=' px-3 py-2 border rounded-lg '>
               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            </div>
            <div>
                <label htmlFor="text">To</label>
            <div className=' px-3 py-2 border rounded-lg '>
               <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            </div>
        </div>
        
        <Link to='/success'><button
          className="w-full text-white py-3 bg-[#F9A51A] rounded-lg  transition"
          type="submit"
        >
          Booking
        </button>
        </Link>
      </form>
    </div>
  
        </div>
        </div>
    );
};

export default Booking;