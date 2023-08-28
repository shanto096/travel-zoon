import React from 'react';
import { Link } from 'react-router-dom';

const Successful = () =>{
    return (
     <div className='flex justify-center '>
       <div className=" bg-green-500 text-white border-4 border-white p-10 rounded-lg shadow-lg text-center">
        <h1 className=" font-bold text-4xl">Successful Booking</h1>
        <p className=" font-semibold mt-2">
        It seems like you might have mistyped or provided incomplete information. <br /> "Jarni" doesn't correspond to any recognizable term or context. <br /> If you could provide more context or clarify your question,<br /> I'd be happy to help you further. Whether you're looking <br /> for information about a specific topic, have a question, <br /> or need assistance with a task, please provide more <br /> details so I can assist you accurately..
        </p>
        <Link to='/'><button className='bg-white text-black text-2xl font-bold py-1 px-3 rounded mt-5'>OK</button></Link>
 
      </div>
     </div>
    );
  }

export default Successful;