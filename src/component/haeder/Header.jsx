import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TravelData from '../travel/TravelData';
import { FaAngleLeft, FaAngleRight, FaArrowRight  } from 'react-icons/fa';


const Header = () => {
  const travelData= useLoaderData()
  const newData = travelData.slice(0, 3)
 
    return (
      <header >
        <div className='grid grid-cols-2 text-white items-center mt-20 ml-20'>
        <div className=" ">
          <h1 className="text-white text-7xl font-bold mb-5">
          Cox's bazar
            </h1>
          <p className="text-white text-lg space-y-4">
          Cox's Bazar is a city, fishing port, <br /> tourism centre and district headquarters in <br /> southeastern Bangladesh. It is famous mostly for its <br /> long natural sandy beach, and it ...
          </p>
          <Link to='/booking'><button className='bg-[#F9A51A] pr-10 pl-3 py-2 text-xl items-center mt-4 rounded   text-black inline-flex '>Booking <FaArrowRight className='ml-2 mt-1'></FaArrowRight></button></Link>
        </div>
        <div className='grid grid-cols-3 gap-3 '>
         {
          newData.map(d => <TravelData key={d.id} data={d}></TravelData>)
         }
        </div>
        </div>
        <div className='text-center ml-28'>
          <button className='text-3xl bg-white p-3 rounded-full mr-4'><FaAngleLeft></FaAngleLeft></button>
          <button className='text-3xl bg-white p-3 rounded-full border-[#F9A51A] border-[2px]'><FaAngleRight></FaAngleRight></button>
        </div>
      </header>

      
      
    );
  };
  
  export default Header;