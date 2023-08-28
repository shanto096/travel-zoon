import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContextProvider';



const Register = () =>{
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accepted, setAccepted] =useState(false)

    const navigate = useNavigate()

    const{createUser} = useContext(AuthContext)
  
    const handleRegister = (e) => {
      e.preventDefault();
      createUser(email,password)
      .then(result =>{
        const createdUser = result.user
        console.log(createdUser);
        navigate('/')
      })
      .catch(error =>{
            console.log(error);
      })
      
      // You can implement your registration logic here
    };

   const  handleCheckboxChange = (event)=>{
    setAccepted(event.target.checked);

   }
  
    return (
      <div className="flex justify-center ">
        <form onSubmit={handleRegister} className="w-full max-w-sm pb-8 pt-10 px-14 bg-white border-[1px] shadow-xl rounded-xl">
          <h2 className="text-2xl font-semibold text-center mb-4 border-b-2 pb-3">Register</h2>
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
              Photo URL
            </label>
            <input
              type="img"
              id="img"
              className="w-full p-2 border rounded"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            required/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            required/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            required/>
          </div>
          <label className="flex items-center space-x-3 mb-5 text-sm cursor-pointer">
              <input
              type="checkbox"
              name='accept'
              className="form-checkbox h-5 w-5  text-indigo-600"
              onChange={handleCheckboxChange}
            required/>
           <p> <span className="text-gray-700">Accept <span className='text-[#F9A51A] '>{<Link to='/term'>Term & Condition</Link>}</span></span></p>
          </label>
          <button
            className="w-full py-2 px-4 bg-[#F9A51A]  text-white rounded"
            onClick={handleRegister}
            disabled={!accepted}
          >
            Register
          </button>
          <p className='text-sm text-center mt-3'>Do have an Account? <Link to='/login'><span className='text-[#F9A51A] '>Login Now</span></Link></p>
        </form>
      </div>
    );
  };

export default Register;