import React from 'react';
import { Link } from 'react-router-dom';

const TravelData = ({data}) => {
    
    
    const {photoUrl,destinationName} = data
    return (
       <Link to='/destination'> <div className=' mt-5' >
            <div className='relative hover:border-[#F9A51A] border-[5px] rounded-[10px] '>
                <img className='rounded-md h-80' src={photoUrl} alt="" />
            </div>
            <div className=''>
                 <h1 className='relative bottom-16 left-5 font-bold text-4xl '>{destinationName}</h1>
            </div>
            
            </div>
            </Link>
    );
};

export default TravelData;