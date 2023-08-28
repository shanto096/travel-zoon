import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/logo.png'
import ActiveLink from '../ActiveLink';
import { AuthContext } from '../AuthContextProvider';

const Navber = () =>  {
    const [menuOpen, setMenuOpen] = useState(false);
    const {user, logoutUser} = useContext(AuthContext)



    const handalToLogOut =()=>{
      logoutUser()
      .than(()=>{

      })
      .catch(()=>{

      })
    }
  
    return (
      <nav className=" p-4 flex justify-between items-center mx-20">
        <div className="mt-2">
          <img className='h-16 ' src={icon} alt="" />
        </div>
  
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 7H3v-2h18v2zm0 5H3v-2h18v2zm0 5H3v-2h18v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
  
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center`}
        >
          <ul className="md:flex  space-x-14">
          <li>
              <ActiveLink
                to='/'
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                to='/destination'
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Destination
                </ActiveLink>
            </li>
          <li>
              <ActiveLink
                to='/hotel'
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Hotel
              </ActiveLink>
            </li>
            
            <li>
              <ActiveLink
                to='/blog'
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Blog
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                to='/contact'
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Contact
              </ActiveLink>
            </li>
           {
            user?  <li onClick={handalToLogOut}>
            <Link
              to=''
              className="text-black rounded-md py-1 px-4 bg-[#F9A51A]  transition duration-300"
            >
              logout
            </Link>
          </li>:
           <li>
           <Link
             to='/login'
             className="text-black rounded-md py-1 px-4 bg-[#F9A51A]  transition duration-300"
           >
             Login
           </Link>
         </li>
        
         
           }
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navber;
  