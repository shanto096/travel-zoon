import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../component/main/Main';
import Header from '../component/haeder/Header';
import Booking from '../component/booking/Booking';
import Successful from '../component/successful/Successful';
import Login from '../component/login/login/Login';
import Register from '../component/login/register/Register';
import PrivateRoute from '../component/PrivateRoute';
import AllBooking from '../component/booking/AllBooking';
import SingleBooking from '../component/booking/SingleBooking';
import HotelData from '../component/hotel/HotelData';
import SingleHotel from '../component/hotel/SingleHotel';
import Blog from '../component/blog/Blog';
import Contact from '../component/contact/Contact';



 const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Header></Header>,
            loader:()=>fetch('https://travel-server-shanto096.vercel.app/travel')
        },
        {
          path:'/booking',
          element:<Booking></Booking>
        },
        {
          path:'/destination',
          element:<AllBooking></AllBooking>,
          loader:()=>fetch('https://travel-server-shanto096.vercel.app/travel')
       },
       {
        path:'/singlebooking/:id',
        element:<SingleBooking></SingleBooking>,
        loader:({params})=>fetch(`https://travel-server-shanto096.vercel.app/travel/${params.id}`)
     },
        {
          path:'/success',
          element:<PrivateRoute><Successful></Successful></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/hotel',
          element:<HotelData></HotelData>,
          loader:()=>fetch('https://travel-server-shanto096.vercel.app/hotel')

        },
        {
          path:'/hotel/:id',
          element:<SingleHotel></SingleHotel>,
          loader:({params})=>fetch(`https://travel-server-shanto096.vercel.app/hotel/${params.id}`)

        },
        {
          path:'/blog',
          element:<Blog></Blog>,

        },
        {
          path:'/contact',
          element:<Contact></Contact>,

        }

      ]
    },
  ]);

export default Router;