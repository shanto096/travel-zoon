import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation()


    const {user,loading} = useContext(AuthContext)

     if (loading) {
        return <><div className="flex justify-center rounded-md p-10 ">
        <div className="animate-pulse   space-x-4">
          <div className="border-4 border-green-600 rounded-full bg-red-500 h-32 w-32"></div>
        </div>
      </div>
      </>
     }
     if (user) {
        return children
     }
     return <Navigate state={{form: location}} to={'/login'} replace></Navigate>
    
};
export default PrivateRoute;